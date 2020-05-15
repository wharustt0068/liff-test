  function createUniversalLink() {
  }

  async function shareMsg() {
  }

  function logOut() {
    liff.logout()
    window.location.reload()
  }

  function closed() {
    liff.closeWindow()
  }

  async function scanCode() {
    const result = await liff.scanCode()
    document.getElementById("scanCode").append(result.value)
  }

  function openWindow() {
    liff.openWindow({
      url: "https://google.com",
      external: true
    })
  }

  async function getFriendship() {
    const friend = await liff.getFriendship()
    document.getElementById("friendship").append(friend.friendFlag)
    if(!friend.friendFlag){
      if(confirm("คุณยังไม่ได้เพิ่ม Message API รบกวนเพิ่ม Message API")){
        window.location = "https://line.me/R/ti/p/@754yztxz"
      }
    }
  }

  async function sendMsg() {
     if(liff.getContext().type !== "none"){
       await liff.sendMessages([
          {
            "type": "sticker",
            "stickerId" : 1,
            "packageId" : 1
          }
       ])
          alert("Message sent")
     }
  }

  function getContext() {
    document.getElementById("type").append(liff.getContext().type)
    document.getElementById("viewType").append(liff.getContext().viewType)
    document.getElementById("utouId").append(liff.getContext().utouId)
    document.getElementById("roomId").append(liff.getContext().roomId)
    document.getElementById("groupId").append(liff.getContext().groupId)
  }

  async function getUserProfile() {
    const profile = await liff.getProfile()
    document.getElementById("pictureUrl").src = profile.pictureUrl
    document.getElementById("userId").append(profile.userId)
    document.getElementById("statusMessage").append(profile.statusMessage)
    document.getElementById("displayName").append(profile.displayName)
    document.getElementById("decodedIDToken").append(liff.getDecodedIDToken().email)
  }

  function getEnvironment() {
    document.getElementById("os").append(liff.getOS())
    document.getElementById("language").append(liff.getLanguage())
    document.getElementById("version").append(liff.getVersion())
    document.getElementById("accessToken").append(liff.getAccessToken())
    document.getElementById("isInClient").append(liff.isInClient())
    if (liff.isInClient()){
      document.getElementById("btnLogOut").style.display = "none"
    } else{
      document.getElementById("btnMsg").style.display = "none"
      document.getElementById("btnScanCode").style.display = "none"
      document.getElementById("btnClose").style.display = "none"
    }
    
  }

  async function main() {
    await liff.init({ liffId: "1654201326-x0m69aqV" })
    document.getElementById("isLoggedIn").append(liff.isLoggedIn())
    if (liff.isLoggedIn()){
      getEnvironment()
      getUserProfile()
      getContext()
      getFriendship()
    } else{
      liff.login()
    }
     createUniversalLink()
  }
  main()
