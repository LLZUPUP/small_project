const app = getApp();
Page({
    data: {
        entities: null,
        currentVid: null,
        currentVideo: null
    },
    Play(e) {
        if(this.data.currentVid !== null) {
            this.data.currentVideo.pause()
        }
        const currentVideo = wx.createVideoContext(`${event.target.dataset.vid}`)
        currentVideo.play()
        this.setData({
            currentVideo,
            currentVid:e.target.dataset.vid
        })
    },
    onLoad() {
        this.setData({
            entities: app.globalData.stories
        })
    }










})