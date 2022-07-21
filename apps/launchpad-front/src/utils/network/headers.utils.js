export function HeaderAuth(token) {
  return {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ' + token,
    },
  };
}

export function HeaderCmc(apiKey) {
  return {
    headers: {
      CMC_PRO_API_KEY: apiKey,
    },
  };
}

export function HeaderFile(token) {
  return {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ' + token,
      Accept: '*/*',
    },
  };
}

export function Header() {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
  };
}