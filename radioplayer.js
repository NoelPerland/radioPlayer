fetch("http://api.sr.se/api/v2/channels?format=json&size=10")
  .then((response) => response.json())
  .then((data) => {
    const channels = data.channels;
    const channelsContainer = document.getElementById("channels");

    channels.forEach((channel) => {
      // Create a DIV for the channel
      const channelDiv = document.createElement("div");
      channelDiv.className = "channel";
      channelDiv.style.backgroundColor = "#" + channel.color; // Inline styling for API color

      // Add channel Image
      const channelImage = document.createElement("img");
      channelImage.src = channel.image || "https://via.placeholder.com/10"; // Choose amount
      channelImage.alt = channel.name;
      channelImage.className = "channel-image";

      // Add channel Name
      const channelName = document.createElement("p");
      channelName.textContent = channel.name;
      channelName.className = "channel-name";

      // Add audioTag
      const audioElement = document.createElement("audio");
      audioElement.controls = "true";
      audioElement.className = "channel-audio";

      // Add source Element to audio
      const audioSource = document.createElement("source");
      audioSource.src = channel.liveaudio.url;
      audioSource.type = "audio/mpeg";

      // Append elements to the channel div
      channelDiv.appendChild(channelImage);
      channelDiv.appendChild(channelName);
      channelDiv.appendChild(audioElement);
      audioElement.appendChild(audioSource);
      channelsContainer.appendChild(channelDiv);
    });
  })
  .catch((error) => console.error("Error fetching channels", error));
