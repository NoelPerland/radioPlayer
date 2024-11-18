fetch("http://api.sr.se/api/v2/channels?format=json&size=100")
  .then((response) => response.json())
  .then((data) => {
    const channels = data.channels;
    const channelsContainer = document.getElementById("channels");

    channels.forEach((channel) => {
      // Create a DIV for the channel
      const channelDiv = document.createElement("div");
      channelDiv.style.border = "1px solid #ccc";
      channelDiv.style.padding = "10px";
      channelDiv.style.margin = "10px 0";
      channelDiv.style.backgroundColor = channel.color;
      channelDiv.style.display = "flex";
      channelDiv.style.alignItems = "center";

      // Add channel Image
      const channelImage = document.createElement("img");
      channelImage.src = channel.image || "https://via.placeholder.com/50";
      channelImage.alt = channel.name;
      channelImage.style.width = "50px";
      channelImage.style.height = "50px";
      channelImage.style.marginRight = "10px";

      // Add channel Name
      const channelName = document.createElement("p");
      channelName.textContent = channel.name;
      channelName.style.flex = "1";

      //Add audioTag
      const audioElement = document.createElement("audio");
      audioElement.controls = "true";

      //Add source Element to audio
      const audioSource = document.createElement("source");
      audioSource.src = channel.liveaudio.url;
      audioSource.type = "audio/mpeg";

      //Appdend source to audio element
      audioElement.appendChild(audioSource);

      // Append elements to the channel div
      channelDiv.appendChild(channelImage);
      channelDiv.appendChild(channelName);
      channelDiv.appendChild(audioElement);

      // Append the channel div to container
      channelsContainer.appendChild(channelDiv);
    });
  })
  .catch((error) => console.error("Error fetching channels", error));
