function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
  }

  sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')