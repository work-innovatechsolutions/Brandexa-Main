/**
 * Brandexa Growth - Multi-Form Webhook (Consultations & Ads Onboarding)
 * Google Apps Script Web App
 *
 * Automatically manages TWO tabs in the SAME workbook:
 * 1. "Consultations" - Free Consultation modal submissions
 * 2. "Ads Onboarding" - Ads account setup & strategy kickoff bookings (/ads/account-setup/form)
 *
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet workbook.
 * 2. Click "Extensions" > "Apps Script".
 * 3. Replace all code in Code.gs with this script.
 * 4. Click "Save" (Ctrl+S / Cmd+S).
 * 5. Click "Deploy" > "Manage deployments" (or "New deployment"):
 *    - Click the Pencil icon to edit the active deployment
 *    - Under Version, select "New version"
 *    - Ensure: Execute as: "Me", Who has access: "Anyone"
 *    - Click "Deploy".
 * 6. That's it! Both forms will automatically route into their own tabs in the same workbook.
 */

// Tab 1: General Free Consultation submissions
var CONSULTATION_SHEET_NAME = "Consultations";
var CONSULTATION_HEADERS = [
  "Timestamp",
  "Name",
  "Email",
  "WhatsApp Number",
  "Query",
  "Meeting Date",
  "Meeting Time",
  "Status"
];

// Tab 2: Ads Funnel Account Setup Kickoff Bookings
var ADS_SHEET_NAME = "Ads Onboarding";
var ADS_HEADERS = [
  "Timestamp",
  "Full Name",
  "Business Email",
  "WhatsApp Number",
  "Valuation Tier",
  "Scheduled Date",
  "Scheduled Time",
  "Google Meet Link",
  "Status"
];

/**
 * Health check endpoint - test in browser to verify deployment
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "success",
      message: "Brandexa Growth Webhook is active and listening for Consultations & Ads Onboarding.",
      sheetsSupported: [CONSULTATION_SHEET_NAME, ADS_SHEET_NAME],
      timestamp: new Date().toISOString()
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handles incoming POST requests from Next.js
 */
function doPost(e) {
  var lock = LockService.getScriptLock();

  try {
    lock.waitLock(15000); // Wait up to 15s for concurrent requests

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseError) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var timestamp = Utilities.formatDate(
      new Date(),
      Session.getScriptTimeZone() || "GMT+5:30",
      "yyyy-MM-dd HH:mm:ss"
    );

    // Check if this is an Ads Funnel Account Setup Booking
    var isAdsBooking = (data.formType === "ads_booking") || Boolean(data.valuation);

    if (isAdsBooking) {
      // -------------------------------------------------------------
      // ROUTE 1: ADS ONBOARDING SHEET
      // -------------------------------------------------------------
      var adsSheet = ss.getSheetByName(ADS_SHEET_NAME);
      if (!adsSheet) {
        adsSheet = ss.insertSheet(ADS_SHEET_NAME);
        adsSheet.appendRow(ADS_HEADERS);
        formatAdsHeaderRow(adsSheet);
      } else if (adsSheet.getLastRow() === 0) {
        adsSheet.appendRow(ADS_HEADERS);
        formatAdsHeaderRow(adsSheet);
      }

      var fullName = data.fullName || data.name || "";
      var email = data.email || "";
      var phone = data.phone || data.whatsapp || data.whatsApp || "";
      var valuation = data.valuation || "$1000";
      var date = data.date || data.meetingDate || "";
      var time = data.time || data.meetingTime || "";
      var meetingLink = data.meetingLink || "https://meet.google.com/ugm-kcyy-wub";
      var status = "Confirmed";

      adsSheet.appendRow([
        timestamp,
        fullName,
        email,
        phone.toString(),
        valuation,
        date,
        time,
        meetingLink,
        status
      ]);

      var adsLastRow = adsSheet.getLastRow();
      adsSheet.getRange(adsLastRow, 1).setNumberFormat("@"); // Timestamp plain text
      adsSheet.getRange(adsLastRow, 4).setNumberFormat("@"); // Phone plain text

      return ContentService.createTextOutput(
        JSON.stringify({
          status: "success",
          sheet: ADS_SHEET_NAME,
          message: "Ads kickoff booking recorded successfully.",
          row: adsLastRow
        })
      ).setMimeType(ContentService.MimeType.JSON);

    } else {
      // -------------------------------------------------------------
      // ROUTE 2: GENERAL CONSULTATION SHEET
      // -------------------------------------------------------------
      var consultSheet = ss.getSheetByName(CONSULTATION_SHEET_NAME);
      if (!consultSheet) {
        consultSheet = ss.insertSheet(CONSULTATION_SHEET_NAME);
        consultSheet.appendRow(CONSULTATION_HEADERS);
        formatConsultationHeaderRow(consultSheet);
      } else if (consultSheet.getLastRow() === 0) {
        consultSheet.appendRow(CONSULTATION_HEADERS);
        formatConsultationHeaderRow(consultSheet);
      }

      var name = data.name || data.fullName || "";
      var clientEmail = data.email || "";
      var whatsapp = data.whatsapp || data.phone || data.whatsApp || "";
      var query = data.query || data.message || data.details || "";
      var meetingDate = data.meetingDate || data.date || "";
      var meetingTime = data.meetingTime || data.time || "";
      var consultStatus = "New";

      consultSheet.appendRow([
        timestamp,
        name,
        clientEmail,
        whatsapp.toString(),
        query,
        meetingDate,
        meetingTime,
        consultStatus
      ]);

      var consultLastRow = consultSheet.getLastRow();
      consultSheet.getRange(consultLastRow, 1).setNumberFormat("@"); // Timestamp plain text
      consultSheet.getRange(consultLastRow, 4).setNumberFormat("@"); // WhatsApp plain text

      return ContentService.createTextOutput(
        JSON.stringify({
          status: "success",
          sheet: CONSULTATION_SHEET_NAME,
          message: "Consultation booked successfully.",
          row: consultLastRow
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

  } catch (error) {
    Logger.log("Webhook Error: " + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

/**
 * Header styling for Ads Onboarding tab (Emerald / Slate theme)
 */
function formatAdsHeaderRow(sheet) {
  var headerRange = sheet.getRange(1, 1, 1, ADS_HEADERS.length);
  headerRange.setBackground("#090d16");
  headerRange.setFontColor("#34d399");
  headerRange.setFontWeight("bold");
  headerRange.setFontSize(11);
  headerRange.setFontFamily("Arial");
  headerRange.setHorizontalAlignment("center");
  sheet.setFrozenRows(1);

  sheet.setColumnWidth(1, 160); // Timestamp
  sheet.setColumnWidth(2, 180); // Full Name
  sheet.setColumnWidth(3, 230); // Business Email
  sheet.setColumnWidth(4, 180); // WhatsApp Number
  sheet.setColumnWidth(5, 140); // Valuation Tier
  sheet.setColumnWidth(6, 140); // Scheduled Date
  sheet.setColumnWidth(7, 130); // Scheduled Time
  sheet.setColumnWidth(8, 260); // Google Meet Link
  sheet.setColumnWidth(9, 110); // Status
}

/**
 * Header styling for Consultations tab (Lime / Black theme)
 */
function formatConsultationHeaderRow(sheet) {
  var headerRange = sheet.getRange(1, 1, 1, CONSULTATION_HEADERS.length);
  headerRange.setBackground("#101010");
  headerRange.setFontColor("#b8ff2c");
  headerRange.setFontWeight("bold");
  headerRange.setFontSize(11);
  headerRange.setFontFamily("Arial");
  headerRange.setHorizontalAlignment("center");
  sheet.setFrozenRows(1);

  sheet.setColumnWidth(1, 160); // Timestamp
  sheet.setColumnWidth(2, 170); // Name
  sheet.setColumnWidth(3, 220); // Email
  sheet.setColumnWidth(4, 180); // WhatsApp Number
  sheet.setColumnWidth(5, 280); // Query
  sheet.setColumnWidth(6, 130); // Meeting Date
  sheet.setColumnWidth(7, 110); // Meeting Time
  sheet.setColumnWidth(8, 110); // Status
}
