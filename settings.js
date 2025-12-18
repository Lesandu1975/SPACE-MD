require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAM6KkVuB*XLnTQQAAGgHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGOUqGNERi0grIoLj3Y19KKGAEoSyqgBxwn*fwJ7unoediV6eiiTJPHnOyfoB8gIz5KAGDH8AQnEFOWqPvCEIDMGojCJEQReEkEMwBLE5myYbe*nakx1Pd19FD6X3aeXXe*mmeS7apML0Fb3edtLyBTy6gJSnDAd*KFig17O2kDrilQVSR*XvqKhPi7mdTlWvDnxGIqeODevOsfUCHm1FiCnOY4sk6IIozBzU+BDTL8L391I*18VXI1tZ2Vll49WKLBcU+gUbSQ5Mb16vh7b4tI+*Bj+Y3*dWZ+ydE30q+ppJjlG+0J1ztBo1txWf2Ye1VfWkjSdt3uAzHOcotEOUc8ybL*OuLe5Lo6aT8yEW1*pMMXLsRMqgv8jkHtovFGMrnyT5cHWkLwKnlTi5yh3b2gXcOHq1gy11612Q6RkRsrKU3MZuR53n9+bwK3Cfvnsl*T+81*51b3h2mfFrc4LIkVW4PLIL7ZscupqaeqX1vbKUbGwFX4M*SGiBU8OLVshHJFhHgpKszv7mhDPSpIPpbeD3z7iytb37CR*ykv4JJVvu6xmeZw4fy9LYq5ILWRNd2LGNOI702XIyXx49PsbJsnG+++xW0tBUZzepcTpNdBzo5tqqhPTYnAeTmSCwlX7RrFH98pwoRY0dgqHw6AKKYsw4hRwXeRuTlS6AYbVCAUX8yS5wCIGEbda7vauT3O7cveMkkION8ErDyyiRRrdA430NHlX7BXQBoUWAGEPhFDNe0MZFjMEYMTD8+58uyNGNv+nWdtMEqQsiTBnf5CXJChi+q*rxFQZBUeZ81eSB2R4QBcP+ZxhxjvOYtUSWOaRBgitkJpAzMIxgxtDHiIiiEAw5LdHH2ppF2DJ*WG6NmWltQRdcnorgEAyBLg8GfWGgiEp*KOl*sW91WxUS8i1HHHRB9sySBF0QVFHSREkWpTaxjT8+8LXlQsQhzhgYAnNeNnrnYFkuXWCtmEwMKzbM2ACf87w74416czqSnEEmRlJh+Am72ud5L9tQoiayIpz2VDKJ379cuFT3X*6jCBiC1NpW*u447xwPU*eaWLfR9p7tBLY9rCovZvL9nhh7LZtE4XmrnagoXwZX4qneJjsigtYTee3q21mdroJo36l2ZC+rZBy*tN1CVOEA*drMvd61eKcvdKlJmdKpzVTu2CcfHpgrbBk+GyTwFXZTe25a3tMqnaClnosbO1X2ly0K7jkaONs6JDM3U7NMui2KdTn+6dnnzmQ*7yr8tFOrVPsaYfRc*Ry2+v1Gk3e8rbH6j+4vv*68Q36zh6NlUodNqYS5rhpj+eRgu+kpW0dFBfLCnaDq9XWtzwgNtQV4PP7pApJBHhX0AoYA5iEtns1pUbZGtfOo+EMz03Dt8TI224EzyLjxaf41viDG4YWAoTBQFV0XBVl4y*JpQaaQJe3s3*WjpLdObgxCVhzy92UCxvM5yODxL1BLAQIUAxQAAAgIAM6KkVuB*XLnTQQAAGgHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHUEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '94770175250',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Lesandu1975',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
