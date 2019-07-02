export default function ({ @axios}){
  $axios.onRequest((config) => {
    if (prosecc.env.QIITA_TOKEN) {
      config.headers.common['Authorization'] = `Bearer ${process.env.QIITA_TOKEN}`
    }
    return config
  })
}
