import "@/assets/scss/style.scss";

export const metadata = {
  title: "Hanul's Next-Site 😎",
  description: "다양한 프레임워크를 통해 만드는 최한울의 포트폴리오 사이트",
  keyword: ["포트폴리오", "리액트", "뷰", "넥스트", "portfolio", "react.js", "vue.js", "next.js"],
}


export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  )
}
