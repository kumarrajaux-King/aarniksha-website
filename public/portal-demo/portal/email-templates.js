/* Aarniksha employee-portal email templates.
   Table-based, inline-styled, 600px — safe for Gmail / Outlook / Apple Mail.
   In production set AKEmail.LOGO and AKEmail.PORTAL to absolute https URLs. */
(function () {
  const E = {
    LOGO: 'assets/logo.png',
    PORTAL: 'https://aarnikshasolutions.com/portal',
    FONT: "'Plus Jakarta Sans',Helvetica,Arial,sans-serif",
  };
  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const fmt = (isoDate) => {
    if (!isoDate) return '';
    const [y, m, d] = isoDate.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  };
  E.fmt = fmt;

  const rows = (pairs) => '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-top:1px solid #E9EDF5">' +
    pairs.filter(Boolean).map(([k, v]) => '<tr><td style="padding:14px 0;border-bottom:1px solid #E9EDF5;font-family:' + E.FONT + ';font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#8A94A6;width:42%;vertical-align:top">' + esc(k) + '</td>' +
      '<td style="padding:14px 0;border-bottom:1px solid #E9EDF5;font-family:' + E.FONT + ';font-size:15px;font-weight:600;color:#101B33;vertical-align:top">' + v + '</td></tr>').join('') + '</table>';

  const button = (label, href) => '<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background:#2F80EC;border-radius:999px">' +
    '<a href="' + href + '" style="display:inline-block;padding:15px 30px;font-family:' + E.FONT + ';font-size:15px;font-weight:700;color:#FFFFFF;text-decoration:none;border-radius:999px">' + esc(label) + ' &#8599;</a></td></tr></table>';

  const pill = (text, bg, fg) => '<span style="display:inline-block;padding:6px 14px;border-radius:999px;background:' + bg + ';color:' + fg + ';font-family:' + E.FONT + ';font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase">' + esc(text) + '</span>';

  function shell({ preheader, eyebrow, title, intro, body = '', cta, hero }) {
    return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + esc(title) + '</title>' +
      '<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet"></head>' +
      '<body style="margin:0;padding:0;background:#E9EFFB;-webkit-font-smoothing:antialiased">' +
      '<div style="display:none;max-height:0;overflow:hidden;opacity:0">' + esc(preheader) + '</div>' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#E9EFFB"><tr><td align="center" style="padding:32px 12px">' +
      '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#FFFFFF;border-radius:18px;overflow:hidden;box-shadow:0 10px 30px rgba(16,27,51,.06)">' +
      '<tr><td style="background:#06367E;padding:24px 36px"><table role="presentation" cellpadding="0" cellspacing="0"><tr>' +
      '<td style="background:#FFFFFF;border-radius:12px;padding:4px;width:48px"><img src="' + E.LOGO + '" width="48" height="48" alt="Aarniksha Solutions" style="display:block;width:48px;height:48px;object-fit:contain"></td>' +
      '<td style="padding-left:16px;font-family:' + E.FONT + '"><div style="font-size:16px;font-weight:800;letter-spacing:-.01em;color:#FFFFFF">Aarniksha Solutions</div>' +
      '<div style="margin-top:3px;font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#9CC6FA">Employee Portal</div></td></tr></table></td></tr>' +
      (hero || '') +
      '<tr><td style="padding:36px 36px 8px;font-family:' + E.FONT + '">' +
      (eyebrow ? '<div style="font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#2F80EC;margin-bottom:12px">' + eyebrow + '</div>' : '') +
      '<h1 style="margin:0 0 14px;font-size:28px;line-height:1.12;letter-spacing:-.025em;font-weight:800;color:#101B33">' + title + '</h1>' +
      '<p style="margin:0;font-size:16px;line-height:1.62;color:#5B6577">' + intro + '</p></td></tr>' +
      (body ? '<tr><td style="padding:22px 36px 4px">' + body + '</td></tr>' : '') +
      (cta ? '<tr><td style="padding:24px 36px 8px">' + button(cta.label, cta.href) + '</td></tr>' : '') +
      '<tr><td style="padding:28px 36px 0"></td></tr>' +
      '<tr><td style="border-top:1px solid #E9EDF5;background:#F8FAFE;padding:22px 36px;font-family:' + E.FONT + ';font-size:12.5px;line-height:1.6;color:#7A859A">' +
      '<strong style="color:#43506A">Aarniksha Solutions Private Limited</strong> &#183; Hi-Tech City, Hyderabad<br>' +
      'This is an automated message from the employee portal. For help, write to <a href="mailto:hr@aarnikshasolutions.com" style="color:#2F80EC;text-decoration:none">hr@aarnikshasolutions.com</a>.</td></tr>' +
      '</table></td></tr></table></body></html>';
  }

  const T = {
    account_approved: {
      subject: (d) => 'Welcome to Aarniksha, ' + d.name.split(' ')[0] + ' — your portal access is ready',
      render: (d) => shell({
        preheader: 'Your employee portal account has been approved.',
        eyebrow: 'Account approved',
        title: 'Welcome to the team, ' + esc(d.name.split(' ')[0]) + '.',
        intro: 'HR has approved your access to the Aarniksha employee portal. Sign in with your registered mobile number or email &#8212; we\u2019ll send a one-time code each time.',
        body: rows([['Employee ID', esc(d.empId)], ['Designation', esc(d.designation)], ['Role', esc(d.role)], ['Reporting manager', esc(d.manager || '—')], ['Sign in with', esc(d.loginWith)]]),
        cta: { label: 'Sign in to the portal', href: E.PORTAL },
      }),
    },
    account_suspended: {
      subject: () => 'Your Aarniksha portal access has been suspended',
      render: (d) => shell({
        preheader: 'Your employee portal access is on hold.',
        eyebrow: 'Access suspended',
        title: 'Your portal access is on hold.',
        intro: 'Hi ' + esc(d.name.split(' ')[0]) + ', your access to the Aarniksha employee portal was suspended on ' + esc(fmt(d.date)) + '. You won\u2019t be able to sign in until HR reactivates your account.',
        body: rows([['Reason', esc(d.reason || 'Not specified')], ['Actioned by', esc(d.by)]]) +
          '<p style="margin:20px 0 0;font-family:' + E.FONT + ';font-size:15px;line-height:1.6;color:#5B6577">If you think this is a mistake, reply to HR at <a href="mailto:hr@aarnikshasolutions.com" style="color:#2F80EC;text-decoration:none">hr@aarnikshasolutions.com</a>.</p>',
      }),
    },
    leave_decision: {
      subject: (d) => 'Leave ' + (d.approved ? 'approved' : 'not approved') + ': ' + d.type + ', ' + fmt(d.from),
      render: (d) => shell({
        preheader: 'Your ' + d.type + ' request has been ' + (d.approved ? 'approved.' : 'declined.'),
        eyebrow: d.approved ? pill('Approved', '#E3F5EC', '#0F7A55') : pill('Not approved', '#FCEAE8', '#B9382F'),
        title: d.approved ? 'Your leave is approved.' : 'Your leave request was declined.',
        intro: 'Hi ' + esc(d.name.split(' ')[0]) + ', ' + esc(d.approver) + ' has ' + (d.approved ? 'approved' : 'declined') + ' your ' + esc(d.type.toLowerCase()) + ' request.' + (d.approved ? ' Your attendance calendar has been updated.' : ''),
        body: rows([['Leave type', esc(d.type)], ['Dates', esc(fmt(d.from)) + (d.to !== d.from ? ' &#8211; ' + esc(fmt(d.to)) : '')], ['Working days', esc(d.days)], d.note ? ['Note from approver', esc(d.note)] : null, ['Balance remaining', esc(d.balanceLeft) + ' days']]),
        cta: { label: 'View my leave', href: E.PORTAL + '/leave' },
      }),
    },
    task_assigned: {
      subject: (d) => 'New task from ' + d.by + ': ' + d.title,
      render: (d) => shell({
        preheader: d.by + ' assigned you a task due ' + fmt(d.due) + '.',
        eyebrow: 'New task',
        title: esc(d.title),
        intro: esc(d.by) + ' assigned you a new task.' + (d.desc ? ' ' + esc(d.desc) : ''),
        body: rows([['Due', esc(fmt(d.due))], ['Priority', d.priority === 'High' ? pill('High', '#FCEAE8', '#B9382F') : d.priority === 'Medium' ? pill('Medium', '#FDF1DC', '#8A5A00') : pill('Low', '#EDF1F8', '#4A5670')], ['Assigned by', esc(d.by)]]),
        cta: { label: 'Open task', href: E.PORTAL + '/tasks' },
      }),
    },
    holiday_greeting: {
      subject: (d) => 'Happy ' + d.holiday + ' from Aarniksha' + (d.closed ? ' — office closed ' + fmt(d.date) : ''),
      render: (d) => shell({
        preheader: d.message,
        hero: '<tr><td style="background:#2F80EC;padding:44px 36px 40px;font-family:' + E.FONT + '">' +
          '<div style="font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.82);margin-bottom:14px">Season\u2019s greetings</div>' +
          '<div style="font-size:42px;line-height:1;letter-spacing:-.035em;font-weight:800;color:#FFFFFF">Happy ' + esc(d.holiday) + '</div>' +
          '<div style="margin-top:14px;font-size:15px;font-weight:600;color:#FFFFFF">' + esc(fmt(d.date)) + '</div></td></tr>',
        title: 'Wishing you and your family a joyful ' + esc(d.holiday) + '.',
        intro: esc(d.message),
        body: d.closed ? rows([['Office', 'Closed on ' + esc(fmt(d.date))], ['Next working day', esc(fmt(d.nextWorking))]]) : '',
        cta: { label: 'See the holiday calendar', href: E.PORTAL + '/holidays' },
      }),
    },
    monthly_summary: {
      subject: (d) => 'Your attendance summary for ' + d.month,
      render: (d) => {
        const tile = (n, l) => '<td width="25%" style="padding:18px 8px;text-align:center;border-right:1px solid #E3EAF6;font-family:' + E.FONT + '"><div style="font-size:30px;line-height:1;letter-spacing:-.03em;font-weight:800;color:#06367E">' + n + '</div><div style="margin-top:8px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#8A94A6">' + l + '</div></td>';
        return shell({
          preheader: d.present + ' days present, ' + d.wfh + ' WFH, ' + d.leave + ' on leave in ' + d.month + '.',
          eyebrow: 'Monthly summary',
          title: esc(d.month) + ' at a glance',
          intro: 'Hi ' + esc(d.name.split(' ')[0]) + ', here\u2019s your attendance for ' + esc(d.month) + '. If anything looks wrong, raise a correction from the portal before the 7th.',
          body: '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFE;border:1px solid #E3EAF6;border-radius:16px;border-collapse:separate"><tr>' +
            tile(d.present, 'Office') + tile(d.wfh, 'WFH') + tile(d.leave, 'Leave') + tile(d.absent, 'Absent').replace('border-right:1px solid #E3EAF6;', '') + '</tr></table>' +
            '<div style="height:18px"></div>' +
            rows([['Working days', esc(d.workingDays)], ['Average hours / day', esc(d.avgHours)], ['Late check-ins (after 9:45)', esc(d.late)], ['Holidays', esc(d.holidays)]]),
          cta: { label: 'View attendance', href: E.PORTAL + '/attendance' },
        });
      },
    },
  };

  E.TYPES = {
    account_approved: 'Account approved', account_suspended: 'Account suspended', leave_decision: 'Leave decision',
    task_assigned: 'Task assigned', holiday_greeting: 'Festival greeting', monthly_summary: 'Monthly summary',
  };
  E.subject = (type, d) => T[type].subject(d);
  E.render = (type, d) => T[type].render(d);
  window.AKEmail = E;
})();
