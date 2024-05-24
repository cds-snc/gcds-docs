export const createTicket = async ticket => {
  const { name, email, subject, message } = ticket;
  const url = `https://api.freshdesk.com/api/v2/tickets`;
  const body = {
    description: message,
    email,
    subject,
    name,
    status: 2,
  };
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(
        `${process.env.FRESHDESK_API_KEY}:X`,
      ).toString('base64')}`,
    },
    body: JSON.stringify(body),
  });
  return response;
};
