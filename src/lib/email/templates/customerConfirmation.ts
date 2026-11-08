export interface CustomerConfirmationData {
  fullName: string;
  email: string;
  requirement: string;
  location?: string;
  message: string;
  submittedAt: string;
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function generateCustomerConfirmationHtml(data: CustomerConfirmationData): string {
  const firstName = escapeHtml(data.fullName.split(' ')[0] || data.fullName);
  const safeRequirement = escapeHtml(data.requirement);
  const safeLocation = data.location && data.location.trim() ? escapeHtml(data.location.trim()) : '';
  const safeDate = escapeHtml(data.submittedAt);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>We've Received Your Enquiry | SAI PRESTIGE</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #F8F6F2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%;">
  
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #F8F6F2; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Email Container -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 12px; border: 1px solid #EAE6DF; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);">
          
          <!-- Brand Header -->
          <tr>
            <td style="background-color: #1F1A17; padding: 28px 36px; border-bottom: 3px solid #BC9A4F;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td valign="middle">
                    <img src="https://res.cloudinary.com/qlxaljlj/image/upload/q_auto,f_auto/v1793422198/Sai_prestige__logo_HD.jpg" alt="SAI PRESTIGE Logo" width="44" height="44" style="display: block; border-radius: 6px; border: 0;" />
                  </td>
                  <td valign="middle" style="padding-left: 14px;">
                    <div style="font-size: 16px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #FFFFFF; line-height: 1.2;">SAI PRESTIGE</div>
                    <div style="font-size: 8.5px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: #D4B468; margin-top: 3px;">REAL ESTATE CONSULTANT</div>
                  </td>
                  <td align="right" valign="middle">
                    <span style="font-size: 11px; color: #D4B468; letter-spacing: 0.08em; text-transform: uppercase;">NAVI MUMBAI</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Editorial Lead -->
          <tr>
            <td style="padding: 36px 36px 20px 36px;">
              <div style="font-size: 10px; font-weight: 700; letter-spacing: 0.24em; text-transform: uppercase; color: #BC9A4F; margin-bottom: 6px;">CONFIRMATION OF RECEIPT</div>
              <h1 style="margin: 0; font-size: 24px; font-weight: 400; color: #1F1A17; letter-spacing: -0.01em; line-height: 1.25;">We&apos;ve Received Your Enquiry.</h1>
              
              <p style="margin: 18px 0 0 0; font-size: 15px; line-height: 1.65; color: #44403C; font-weight: 400;">
                Dear ${firstName},
              </p>
              
              <p style="margin: 12px 0 0 0; font-size: 14px; line-height: 1.7; color: #57534E; font-weight: 300;">
                Thank you for contacting <strong>SAI PRESTIGE</strong>. We have successfully received your enquiry. Our property consultation team will review your requirements and get in touch with you.
              </p>

              <p style="margin: 12px 0 0 0; font-size: 14px; line-height: 1.7; color: #57534E; font-weight: 300;">
                Whether you are exploring residential homes in Ulwe and Sanpada, commercial spaces in Vashi, or long-term investments across Navi Mumbai, we are committed to providing transparent guidance, verified documentation, and deep local market insight.
              </p>
            </td>
          </tr>

          <!-- Submission Summary Card -->
          <tr>
            <td style="padding: 0 36px 24px 36px;">
              <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #78716C; margin-bottom: 8px;">Enquiry Summary</div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #FAF9F6; border: 1px solid #EAE6DF; border-radius: 8px; overflow: hidden;">
                <tr>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #EAE6DF; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #78716C; width: 34%;">Requirement</td>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #EAE6DF; font-size: 13px; font-weight: 600; color: #1F1A17;">
                    <span style="display: inline-block; background-color: #F3EEDF; color: #8A6E2E; padding: 2px 8px; border-radius: 4px; font-size: 12px; border: 1px solid #E0D3B8;">${safeRequirement}</span>
                  </td>
                </tr>
                ${
                  safeLocation
                    ? `<tr>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #EAE6DF; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #78716C;">Preferred Location</td>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #EAE6DF; font-size: 13px; font-weight: 500; color: #1F1A17;">${safeLocation}</td>
                </tr>`
                    : ''
                }
                <tr>
                  <td style="padding: 12px 18px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #78716C;">Recorded On</td>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 400; color: #78716C;">${safeDate} (IST)</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact Channels Strip -->
          <tr>
            <td style="padding: 0 36px 32px 36px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #1F1A17; border-radius: 8px; padding: 20px 24px;">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #D4B468; margin-bottom: 4px;">NEED IMMEDIATE ASSISTANCE?</div>
                    <div style="font-size: 14px; color: #FFFFFF; font-weight: 400; line-height: 1.5;">
                      You may also connect with our advisory desk directly via phone or WhatsApp:
                    </div>
                    <div style="margin-top: 12px;">
                      <a href="tel:+919326433965" style="display: inline-block; padding: 8px 16px; margin-right: 8px; margin-bottom: 6px; border-radius: 6px; background-color: #BC9A4F; color: #1F1A17; font-size: 12px; font-weight: 600; text-decoration: none;">
                        Call +91 93264 33965
                      </a>
                      <a href="https://wa.me/919326433965" target="_blank" style="display: inline-block; padding: 8px 16px; margin-bottom: 6px; border-radius: 6px; background-color: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); color: #FFFFFF; font-size: 12px; font-weight: 600; text-decoration: none;">
                        WhatsApp Chat
                      </a>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Action CTA Button -->
          <tr>
            <td align="center" style="padding: 0 36px 36px 36px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="border-radius: 8px; background-color: #BC9A4F;">
                    <a href="https://saiprestigerealestate.com/contact" target="_blank" style="display: inline-block; padding: 14px 28px; font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #1F1A17; text-decoration: none; border-radius: 8px; border: 1px solid #BC9A4F; background: linear-gradient(135deg, #E1B959 0%, #BC9A4F 100%);">
                      Contact Our Team &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Branded Footer -->
          <tr>
            <td style="background-color: #FAF9F6; border-top: 1px solid #EAE6DF; padding: 24px 36px; text-align: center;">
              <p style="margin: 0; font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #1F1A17;">
                SAI PRESTIGE &bull; REAL ESTATE CONSULTANT
              </p>
              <p style="margin: 6px 0 0 0; font-size: 11px; color: #78716C; line-height: 1.5;">
                Shop No. 03, Plot No. 172, Dream Heritage, Sector 17, Ulwe, Navi Mumbai, Maharashtra<br/>
                Email: <a href="mailto:sai.prestige01@gmail.com" style="color: #9D7F3C; text-decoration: none; font-weight: 600;">sai.prestige01@gmail.com</a> &bull; Web: <a href="https://saiprestigerealestate.com" style="color: #9D7F3C; text-decoration: none; font-weight: 600;">saiprestigerealestate.com</a>
              </p>
              <p style="margin: 12px 0 0 0; font-size: 10px; color: #A8A29E; line-height: 1.4;">
                You are receiving this confirmation because you submitted an enquiry on the SAI PRESTIGE website.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

export function generateCustomerConfirmationPlainText(data: CustomerConfirmationData): string {
  const firstName = data.fullName.split(' ')[0] || data.fullName;
  const lines: string[] = [
    '==================================================',
    'SAI PRESTIGE — WE HAVE RECEIVED YOUR ENQUIRY',
    '==================================================',
    '',
    `Dear ${firstName},`,
    '',
    'Thank you for contacting SAI PRESTIGE. We have successfully received your enquiry.',
    'Our property consultation team will review your requirements and get in touch with you.',
    '',
    '--------------------------------------------------',
    'YOUR ENQUIRY SUMMARY',
    '--------------------------------------------------',
    `Requirement:        ${data.requirement}`,
  ];

  if (data.location && data.location.trim()) {
    lines.push(`Preferred Location: ${data.location.trim()}`);
  }

  lines.push(`Recorded On:        ${data.submittedAt} (IST)`);
  lines.push('');
  lines.push('--------------------------------------------------');
  lines.push('OFFICIAL CONTACT DETAILS');
  lines.push('--------------------------------------------------');
  lines.push('Phone / WhatsApp:   +91 93264 33965');
  lines.push('Email:              sai.prestige01@gmail.com');
  lines.push('Website:            saiprestigerealestate.com');
  lines.push('Office Address:     Shop No. 03, Plot No. 172, Dream Heritage,');
  lines.push('                    Sector 17, Ulwe, Navi Mumbai, Maharashtra');
  lines.push('==================================================');

  return lines.join('\n');
}

