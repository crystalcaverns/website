function getDiscordStatus(url) {
  const discord_status = document.getElementById('discord-status');
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      discord_status.innerText = `${data.presence_count} players chatting`;
    })
}
function getServerStatus(url) {
  const server_status = document.getElementById('server-status');
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if(data.online) {
        server_status.innerHTML = `${data.players.online} players online`;
      } else {
        server_status.innerHTML = `Server is currently offline`;
      }
    })
}

const serverStatusAPI = 'https://api.mcsrvstat.us/3/play.crystalcaverns.net';
getServerStatus(serverStatusAPI);

const discordStatusAPI = 'https://discord.com/api/guilds/1102891773543583766/widget.json';
getDiscordStatus(discordStatusAPI);

const intervalId = setInterval(() => {
  getDiscordStatus(discordStatusAPI);
  getServerStatus(serverStatusAPI);
}, 5000);