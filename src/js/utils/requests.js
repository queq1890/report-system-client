export default function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  throw new Error(response);
}
