import { NextRequest, NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, phone, caseType, loanAmount, contractYear } = await req.json();

    if (!fullName || !email || !phone || !caseType || !loanAmount || !contractYear) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // const { error } = await resend.emails.send({
    //   from: process.env.MAIL_FROM || '',
    //   to: process.env.MAIL_TO || '',
    //   subject: `Nowa wiadomość - ${caseType}`,
    //   html: `
    //     <p><strong>Imię i nazwisko:</strong> ${fullName}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Numer telefonu:</strong> ${phone}</p>
    //     <p><strong>Rodzaj sprawy:</strong> ${caseType}</p>
    //     <p><strong>Kwota kredytu lub zobowiązania (PLN):</strong> ${loanAmount}</p>
    //     <p><strong>Rok zawarcia umowy:</strong> ${contractYear}</p>
    //   `,
    // });

    // if (error) {
    //   return NextResponse.json({ error: error.message }, { status: 500 });
    // }

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}