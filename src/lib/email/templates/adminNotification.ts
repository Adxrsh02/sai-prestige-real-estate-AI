export interface AdminNotificationData {
  fullName: string;
  email: string;
  phone: string;
  requirement: string;
  location?: string;
  budget?: string;
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

export function generateAdminNotificationHtml(data: AdminNotificationData): string {
  const safeName = escapeHtml(data.fullName);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone);
  const safeRequirement = escapeHtml(data.requirement);
  const safeLocation = data.location && data.location.trim() ? escapeHtml(data.location.trim()) : '';
  const safeBudget = data.budget && data.budget.trim() ? escapeHtml(data.budget.trim()) : '';
  const safeMessage = escapeHtml(data.message).replace(/\n/g, '<br/>');
  const safeDate = escapeHtml(data.submittedAt);

  const replyMailto = `mailto:${safeEmail}?subject=${encodeURIComponent(
    `Re: Property Enquiry (${data.requirement}) — SAI PRESTIGE`
  )}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>New Property Enquiry | SAI PRESTIGE</title>
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
                    <span style="display: inline-block; padding: 4px 10px; border-radius: 100px; background-color: rgba(188, 154, 79, 0.15); border: 1px solid #BC9A4F; font-size: 9px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #E1B959;">NEW LEAD</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Editorial Lead -->
          <tr>
            <td style="padding: 36px 36px 20px 36px;">
              <div style="font-size: 10px; font-weight: 700; letter-spacing: 0.24em; text-transform: uppercase; color: #BC9A4F; margin-bottom: 6px;">PORTAL CONSULTATION REQUEST</div>
              <h1 style="margin: 0; font-size: 24px; font-weight: 400; color: #1F1A17; letter-spacing: -0.01em; line-height: 1.25;">New Property Enquiry Received</h1>
              <p style="margin: 12px 0 0 0; font-size: 14px; line-height: 1.6; color: #57534E; font-weight: 300;">
                A prospective client has submitted an inquiry through the SAI PRESTIGE website. Details of the requirement are itemized below:
              </p>
            </td>
          </tr>

          <!-- Customer Data Table -->
          <tr>
            <td style="padding: 0 36px 24px 36px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #FAF9F6; border: 1px solid #EAE6DF; border-radius: 8px; overflow: hidden;">
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EAE6DF; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #78716C; width: 34%;">Client Name</td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EAE6DF; font-size: 14px; font-weight: 600; color: #1F1A17;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EAE6DF; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #78716C;">Email Address</td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EAE6DF; font-size: 14px; font-weight: 500; color: #1F1A17;">
                    <a href="mailto:${safeEmail}" style="color: #9D7F3C; text-decoration: none; font-weight: 600;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EAE6DF; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #78716C;">Phone Number</td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EAE6DF; font-size: 14px; font-weight: 600; color: #1F1A17;">
                    <a href="tel:${safePhone}" style="color: #1F1A17; text-decoration: none;">${safePhone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EAE6DF; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #78716C;">Enquiry Type</td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EAE6DF; font-size: 13px; font-weight: 600; color: #1F1A17;">
                    <span style="display: inline-block; background-color: #F3EEDF; color: #8A6E2E; padding: 3px 8px; border-radius: 4px; font-size: 12px; border: 1px solid #E0D3B8;">${safeRequirement}</span>
                  </td>
                </tr>
                ${
                  safeLocation
                    ? `<tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EAE6DF; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #78716C;">Preferred Location</td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EAE6DF; font-size: 14px; font-weight: 500; color: #1F1A17;">${safeLocation}</td>
                </tr>`
                    : ''
                }
                ${
                  safeBudget
                    ? `<tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EAE6DF; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #78716C;">Target Budget</td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #EAE6DF; font-size: 14px; font-weight: 500; color: #1F1A17;">${safeBudget}</td>
                </tr>`
                    : ''
                }
                <tr>
                  <td style="padding: 14px 18px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #78716C;">Submission Time</td>
                  <td style="padding: 14px 18px; font-size: 13px; font-weight: 400; color: #78716C;">${safeDate} (IST)</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Box -->
          <tr>
            <td style="padding: 0 36px 32px 36px;">
              <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #78716C; margin-bottom: 8px;">Client Message &amp; Requirement Notes</div>
              <div style="background-color: #FAF9F6; border-left: 3px solid #BC9A4F; padding: 18px 20px; border-radius: 4px; font-size: 14px; line-height: 1.65; color: #292524; font-weight: 400;">
                ${safeMessage}
              </div>
            </td>
          </tr>

          <!-- Action CTA Button -->
          <tr>
            <td align="center" style="padding: 0 36px 36px 36px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="border-radius: 8px; background-color: #BC9A4F;">
                    <a href="${replyMailto}" target="_blank" style="display: inline-block; padding: 14px 28px; font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #1F1A17; text-decoration: none; border-radius: 8px; border: 1px solid #BC9A4F; background: linear-gradient(135deg, #E1B959 0%, #BC9A4F 100%);">
                      Reply to ${safeName} &rarr;
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
                Direct Advisory: <a href="tel:+919326433965" style="color: #9D7F3C; text-decoration: none; font-weight: 600;">+91 93264 33965</a> &bull; <a href="https://saiprestigerealestate.com" style="color: #9D7F3C; text-decoration: none; font-weight: 600;">saiprestigerealestate.com</a>
              </p>
              <p style="margin: 12px 0 0 0; font-size: 10px; color: #A8A29E; line-height: 1.4;">
                This message was securely routed through the SAI PRESTIGE Client Advisory Platform.
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

export function generateAdminNotificationPlainText(data: AdminNotificationData): string {
  const lines: string[] = [
    '==================================================',
    'SAI PRESTIGE — NEW PROPERTY ENQUIRY RECEIVED',
    '==================================================',
    '',
    `Client Name:        ${data.fullName}`,
    `Email Address:      ${data.email}`,
    `Phone Number:       ${data.phone}`,
    `Enquiry Type:       ${data.requirement}`,
  ];

  if (data.location && data.location.trim()) {
    lines.push(`Preferred Location: ${data.location.trim()}`);
  }

  if (data.budget && data.budget.trim()) {
    lines.push(`Target Budget:      ${data.budget.trim()}`);
  }

  lines.push(`Submission Time:    ${data.submittedAt} (IST)`);
  lines.push('');
  lines.push('--------------------------------------------------');
  lines.push('CLIENT MESSAGE / PROPERTY REQUIREMENT');
  lines.push('--------------------------------------------------');
  lines.push(data.message.trim());
  lines.push('');
  lines.push('==================================================');
  lines.push('Reply to this client: ' + data.email);
  lines.push('SAI PRESTIGE · Shop No. 03, Plot No. 172, Dream Heritage, Sector 17, Ulwe, Navi Mumbai');
  lines.push('Direct Advisory: +91 93264 33965 · saiprestigerealestate.com');
  lines.push('==================================================');

  return lines.join('\n');
}

