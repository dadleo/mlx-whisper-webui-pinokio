module.exports = {
  version: "1.1",
  title: "MLX Whisper WebUI",
  description: "Fast Speech-to-Text Web UI with Apple MLX and OpenAI Whisper",
  icon: "icon.png",
  menu: async (kernel) => {
    // Check if the app is installed (checks for main.py)
    let installed = await kernel.exists(__dirname + "/app/main.py")
    
    // Check if the app is currently running
    let running = await kernel.running(__dirname + "/start.json")
    
    if (installed) {
      if (running) {
        return [
          {
            default: true,
            icon: "fa-solid fa-stop",
            text: "Stop",
            href: "start.json",
            params: { stop: true }
          },
          {
            icon: "fa-solid fa-desktop",
            text: "Open Web UI",
            href: "http://127.0.0.1:7860",
            target: "_blank"
          },
          {
            icon: "fa-solid fa-terminal",
            text: "Terminal",
            href: "start.json"
          }
        ]
      } else {
        return [
          {
            default: true,
            icon: "fa-solid fa-power-off",
            text: "Start",
            href: "start.json"
          },
          {
            icon: "fa-solid fa-arrows-rotate",
            text: "Update",
            href: "update.json"
          },
          {
            icon: "fa-solid fa-plug",
            text: "Reinstall",
            href: "install.json"
          }
        ]
      }
    } else {
      return [
        {
          default: true,
          icon: "fa-solid fa-download",
          text: "Install",
          href: "install.json"
        }
      ]
    }
  }
}