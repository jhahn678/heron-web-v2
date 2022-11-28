import * as React from "react";

const FishermanFishing = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={88}
    height={110}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M27.299 35.917c.359.105.881.06 1.3.15.419.089.97.716.97.716l-.716.599-1.345-.389-.209-1.076Z"
        fill="#FDC6AA"
      />
      <path
        d="M17.78 11.037s2.652-.49 3.27 3.888c.62 4.378 1.62 8.647 1.953 10.313.227 1.135 3.24 7.437 4.714 10.26.649 1.244-.501 1.09-1.748 1.735-1.012.523-1.423 1.18-2.018.208-1.21-1.983-3.983-6.317-5.073-8.967-1.666-4.046-3.062-10.789-3.062-11.312 0-.524 1.964-6.125 1.964-6.125Z"
        fill="#E3BA17"
      />
      <path
        d="M69.482 91.747c-2.725-.231-9.51 1.346-10.365 5.055-.854 3.709 6.96 5.494 5.453 7.504-1.507 2.009.056 5.581 6.754 5.693 6.697.111 14.466-4.722 11.921-7.691-2.544-2.97-.535-3.918 2.423-5.425 2.957-1.507 3.125-5.303-2.233-6.028-5.357-.725-8.037 1.395-13.954.893h.001Z"
        fill="#83C4DE"
      />
      <path
        d="m75.471 100.904-.031.019c-.02.014-.051.034-.093.059-.086.05-.216.12-.402.197l-.073.029-.078.028a3.08 3.08 0 0 1-.266.085c-.032.009-.064.019-.1.028l-.105.025-.111.025a5.224 5.224 0 0 1-1.064.105c-.399 0-.834-.045-1.258-.149a4.478 4.478 0 0 1-.616-.202c-.049-.022-.097-.042-.145-.065-.045-.023-.094-.045-.139-.07l-.067-.036-.034-.019-.007-.005-.004-.002-.007-.005-.015-.009c-.04-.025-.08-.048-.124-.078l-.063-.042-.059-.043c-.019-.014-.04-.029-.057-.044l-.055-.046a1.945 1.945 0 0 1-.199-.191 1.576 1.576 0 0 1-.278-.423 1.182 1.182 0 0 1-.098-.455 1.16 1.16 0 0 1 .096-.46c.064-.149.16-.294.284-.43.124-.137.278-.262.452-.376l.032-.022.034-.02.068-.04.01-.006.004-.003.007-.003.017-.01.034-.017.069-.037c.051-.024.101-.05.152-.073.052-.022.102-.045.156-.065.212-.084.437-.153.67-.205a5.435 5.435 0 0 1 2.622.071c.353.103.637.233.858.364.22.132.377.265.487.379a1.567 1.567 0 0 1 .258.35l.014.026c.005.01-.005.02-.02.023-.016.002-.033-.002-.038-.011l-.017-.026a1.725 1.725 0 0 0-.287-.333 2.504 2.504 0 0 0-.5-.35 3.736 3.736 0 0 0-.837-.325 5.033 5.033 0 0 0-1.795-.132 5.025 5.025 0 0 0-.645.108 3.99 3.99 0 0 0-.603.195c-.048.02-.093.042-.14.062-.046.022-.087.044-.13.066l-.067.037-.033.02-.017.008-.013.008-.06.038-.031.019-.029.02a2.08 2.08 0 0 0-.4.343 1.365 1.365 0 0 0-.247.39c-.053.136-.08.276-.077.414.003.138.033.276.091.409.06.133.144.26.252.378.056.059.114.117.18.171l.05.04.051.039.053.039.054.036c.033.023.078.049.118.073l.027.016.03.017.061.034c.04.021.083.042.125.062l.129.059c.174.074.358.136.547.185a5.309 5.309 0 0 0 2.517.019c.06-.015.117-.029.17-.045l.078-.022.074-.023c.19-.061.33-.121.422-.162l.142-.066c.013-.006.032-.006.043.003.01.007.009.017-.001.023l-.003.002ZM71.752 102.471l-.07-.011-.085-.013-.116-.019a7.376 7.376 0 0 1-.695-.16c-.07-.019-.14-.041-.215-.064-.073-.025-.148-.05-.223-.077a5.614 5.614 0 0 1-.905-.418 6.172 6.172 0 0 0-.106-.062l-.104-.068c-.07-.045-.134-.093-.2-.14a1.252 1.252 0 0 1-.093-.073l-.091-.073a4.545 4.545 0 0 1-.166-.152c-.05-.052-.103-.102-.147-.154l-.069-.077-.06-.078c-.02-.026-.042-.051-.059-.077l-.052-.077a.829.829 0 0 1-.025-.038l-.021-.038a3.535 3.535 0 0 1-.043-.075c-.014-.024-.025-.049-.035-.073a2.539 2.539 0 0 0-.033-.072c-.02-.048-.034-.094-.049-.138-.008-.023-.013-.044-.018-.066l-.014-.062c-.01-.041-.014-.08-.018-.117-.01-.073-.006-.137-.006-.19-.001-.025.004-.049.006-.07.002-.02.004-.037.007-.05l.007-.043c.002-.01.017-.017.034-.016.015 0 .025.007.028.014l.013.043c.009.027.016.067.032.117l.026.084c.007.03.02.063.032.097.013.036.024.072.04.111.017.038.03.079.05.121l.03.064.032.066.035.068c.012.023.024.047.04.07.027.047.052.095.086.143l.049.074c.016.025.035.048.054.073l.057.075.063.073c.04.051.092.099.138.148.023.025.052.049.077.073l.078.073.084.07c.028.024.055.048.087.07.06.046.12.093.184.135l.095.064.102.064c.13.083.272.161.414.232.143.07.285.136.427.192.14.057.28.107.41.151.065.022.13.041.19.06.031.01.062.018.09.026l.085.024a8.87 8.87 0 0 0 .401.099c.032.008.06.013.083.018l.069.015c.016.003.024.013.017.022-.005.009-.021.014-.036.011l.002.001Z"
        fill="#57ABCC"
      />
      <path
        d="m72.51 96.651.161-.017a7.957 7.957 0 0 1 1.191-.031l.108.004.11.008c.074.007.151.011.23.018.077.01.157.018.24.027.081.011.164.025.248.036l.064.01.063.012.13.024c.042.008.087.015.13.025l.131.03.133.03.132.035.134.036.133.04c.355.11.708.251 1.034.423.324.17.629.372.877.6.129.111.237.231.34.354.046.063.096.124.135.189.021.032.044.063.062.096l.054.097c.067.131.125.264.16.398.022.067.032.135.046.202.007.033.008.067.013.101.004.034.008.068.008.1 0 .034.002.068.003.101 0 .033-.004.066-.006.1l-.002.049c-.001.016-.005.033-.007.05l-.014.098c-.027.13-.06.259-.115.382-.1.248-.256.479-.444.685a3.549 3.549 0 0 1-.632.54c-.014.01-.027.02-.042.029l-.044.028-.085.054c-.055.036-.115.068-.172.1a7.421 7.421 0 0 0-.085.048l-.085.043-.167.081c-.219.103-.426.18-.599.239-.174.059-.317.097-.413.123-.049.014-.087.023-.112.029l-.039.01c-.015.004-.034 0-.04-.009-.007-.008 0-.018.012-.022l.036-.013.103-.036a6.261 6.261 0 0 0 1.067-.493c.025-.014.05-.03.076-.047.025-.015.05-.032.074-.048.1-.065.203-.136.301-.212.198-.154.384-.331.543-.529.018-.025.04-.05.058-.075l.055-.077c.008-.012.017-.026.027-.038l.025-.04.049-.08c.016-.027.028-.054.044-.082a1.9 1.9 0 0 1 .021-.041l.011-.021.009-.022c.024-.056.051-.113.069-.171.01-.028.022-.058.03-.087l.023-.089c.004-.015.009-.029.011-.044l.009-.045.016-.09c.002-.031.006-.062.009-.092 0-.015.003-.03.004-.046v-.046c.001-.03.003-.06.002-.092l-.005-.092c0-.032-.006-.062-.01-.093-.005-.03-.007-.062-.014-.093-.014-.062-.025-.124-.045-.186a1.874 1.874 0 0 0-.151-.365l-.05-.09c-.017-.03-.038-.06-.056-.088-.036-.059-.082-.115-.124-.173-.022-.029-.047-.056-.07-.084a1.55 1.55 0 0 0-.075-.084 6.417 6.417 0 0 1-.077-.081l-.083-.079a3.985 3.985 0 0 0-.79-.564 5.71 5.71 0 0 0-.934-.415l-.12-.042a20.408 20.408 0 0 1-.121-.038l-.122-.037-.121-.032-.12-.032-.12-.029a16.834 16.834 0 0 1-.237-.052 8.543 8.543 0 0 0-.878-.129c-.067-.005-.132-.013-.195-.017a9.924 9.924 0 0 1-.183-.012l-.086-.005-.082-.003-.154-.004a10.236 10.236 0 0 0-.457.002l-.163.004c-.017 0-.031-.007-.032-.017 0-.009.01-.017.025-.018ZM68.058 99.646s-.008-.037-.017-.102c-.002-.017-.006-.034-.006-.054v-.138l.008-.081c.002-.014.003-.029.006-.043a5.557 5.557 0 0 1 .03-.138c.007-.032.02-.065.032-.098s.022-.067.04-.101c.014-.034.03-.07.047-.104.016-.035.037-.07.056-.105l.03-.053.034-.053c.024-.035.045-.07.072-.105l.078-.103c.027-.034.058-.067.087-.1l.043-.05.048-.047c.031-.031.062-.063.094-.092.066-.06.128-.117.196-.169l.096-.075.097-.068c.061-.044.122-.082.176-.115l.075-.047.067-.037.129-.071a.051.051 0 0 1 .044 0c.01.006.011.017 0 .024l-.114.078c-.018.013-.039.025-.061.04l-.067.05a4.66 4.66 0 0 1-.078.055c-.027.019-.052.041-.08.064l-.087.069-.087.076c-.062.052-.117.11-.178.169-.03.03-.056.06-.085.091l-.043.047-.04.048c-.025.032-.054.065-.078.098a6.934 6.934 0 0 0-.072.1c-.024.033-.043.068-.066.103l-.032.05-.028.052c-.018.034-.037.068-.052.102l-.045.1a.39.39 0 0 0-.02.05l-.018.048c-.012.032-.025.064-.033.094-.019.062-.039.12-.051.174a4.56 4.56 0 0 1-.022.078c-.004.024-.01.049-.015.07a.763.763 0 0 1-.014.062c-.006.019-.007.037-.01.054-.012.064-.022.101-.022.101-.002.01-.018.016-.035.015-.014 0-.024-.008-.026-.015l-.003.002Z"
        fill="#57ABCC"
      />
      <path
        d="m79.125 101.387-.014.02c-.009.012-.021.032-.04.056-.038.049-.093.122-.175.211a3.754 3.754 0 0 1-.553.496c-.042.032-.087.063-.133.096a3.086 3.086 0 0 1-.146.097l-.019.013-.01.006-.012.008-.039.023-.078.048c-.054.032-.105.064-.17.097-.06.032-.121.066-.185.099s-.13.064-.198.096c-.034.016-.066.033-.102.049l-.108.045c-.072.031-.144.063-.222.092-.077.028-.153.06-.233.088l-.246.082c-.083.027-.17.052-.256.077l-.066.019-.067.017-.134.035a2.74 2.74 0 0 1-.137.034l-.138.032c-.047.009-.094.02-.14.03l-.143.027a10.957 10.957 0 0 1-2.4.184c-.402-.013-.793-.047-1.164-.097-.185-.024-.365-.057-.54-.088l-.255-.053c-.083-.018-.164-.038-.245-.057-.08-.018-.157-.041-.234-.062-.076-.022-.151-.041-.223-.065l-.212-.066-.197-.07-.095-.034-.09-.036c-.06-.023-.118-.047-.174-.07-.056-.023-.108-.047-.159-.07-.051-.023-.102-.045-.148-.068-.092-.047-.18-.089-.256-.13l-.207-.116c-.061-.036-.112-.07-.158-.099l-.063-.04-.028-.018-.023-.016a4.354 4.354 0 0 0-.09-.063c-.011-.007-.01-.019.004-.025a.047.047 0 0 1 .04 0l.107.053c.068.035.175.084.306.147l.225.098c.04.018.086.034.131.053l.142.057c.048.019.101.036.154.056.054.019.108.04.164.058l.178.058.091.029.096.028.198.057.208.053c.07.019.145.035.22.051.074.018.149.035.227.049l.237.046.245.04c.167.024.337.049.514.067a11.611 11.611 0 0 0 2.219.027c.375-.03.744-.082 1.1-.147l.132-.024.13-.028.13-.028.127-.029c.17-.04.332-.085.492-.129.318-.093.61-.199.879-.307l.196-.082.182-.082c.06-.026.12-.057.177-.086l.086-.043.043-.022.005-.002h.003c-.005.001 0-.001 0 0l.01-.006.02-.011a6.823 6.823 0 0 0 1.173-.784l.08-.068c.01-.008.029-.01.043-.005.013.005.017.014.012.022h-.001ZM66.618 99.198l.016-.122c.013-.08.037-.199.083-.346.052-.148.125-.327.244-.526a3.51 3.51 0 0 1 .512-.644c.054-.058.12-.113.181-.17.03-.03.067-.057.1-.086l.106-.086.112-.085.056-.043.06-.042.122-.085.13-.082.066-.042.009-.006.004-.002.007-.005.017-.01.034-.02.138-.078c.044-.027.096-.053.148-.08l.154-.079.16-.075c.055-.025.107-.051.164-.075.114-.047.226-.097.348-.14l.181-.067.188-.063.094-.031.096-.029c.066-.018.13-.038.196-.058l.202-.052.101-.026.104-.023.209-.048.213-.041.107-.02.108-.019.22-.035.22-.03.112-.014.112-.011c.3-.033.604-.051.91-.06l.23-.004.229.002h.115l.114.005.229.01.227.015.113.008.112.01.224.023.221.028.11.014.11.017.217.034c.142.027.285.05.422.083l.207.045.2.051c.034.01.068.016.1.026.032.01.065.02.098.028l.192.057c.505.158.957.348 1.343.553.05.024.094.052.14.078l.137.078.017.01.018.011.03.02.062.039.06.038.062.041.12.082.11.082.054.04.051.041.1.082c.254.218.447.432.59.627.143.196.237.372.298.52l.023.053.018.051c.012.033.025.064.033.093.017.058.032.106.04.147a2.308 2.308 0 0 1 .026.123c.002.01-.01.018-.027.02-.015 0-.029-.005-.033-.013l-.015-.03-.044-.088-.078-.139c-.015-.027-.034-.056-.053-.087a1.975 1.975 0 0 1-.03-.047l-.034-.05a3.737 3.737 0 0 0-.385-.48 4.874 4.874 0 0 0-.647-.566l-.103-.072-.052-.037-.055-.036a23.266 23.266 0 0 1-.11-.074 7.99 7.99 0 0 1-.116-.07c-.02-.012-.039-.025-.06-.036l-.064-.037-.066-.037-.033-.019-.013-.007-.016-.009-.133-.07c-.045-.023-.089-.047-.136-.069a8.569 8.569 0 0 0-2.01-.68c-.127-.03-.258-.051-.39-.076-.066-.012-.133-.022-.2-.033l-.1-.016-.101-.013c-.068-.01-.136-.017-.204-.026l-.208-.02-.104-.01-.105-.008-.21-.015-.21-.01c-.036 0-.072-.003-.107-.004l-.105-.001c-.071 0-.142-.004-.213-.003l-.212.002c-.284.007-.567.019-.845.047l-.105.01c-.035.003-.069.008-.104.012l-.207.025-.204.03-.103.016-.1.018a13.16 13.16 0 0 0-.2.035l-.196.042-.098.02-.096.024-.19.045-.186.051-.092.026-.09.027c-.06.02-.119.037-.178.056-.058.019-.116.04-.173.06-.117.038-.224.083-.334.124-.056.02-.107.044-.16.066l-.156.067-.146.07c-.049.023-.097.045-.145.072l-.144.075-.036.02-.018.008s-.006.004 0 0l-.005.003-.008.004a4.226 4.226 0 0 0-.066.038l-.13.074-.122.077-.061.038-.058.04-.114.077-.106.078c-.034.026-.071.052-.102.078-.065.053-.131.105-.189.157-.24.208-.423.414-.56.601-.142.187-.238.358-.307.5-.066.142-.11.255-.134.333l-.038.12c-.002.01-.019.016-.036.014-.015-.001-.026-.01-.025-.018h.003Z"
        fill="#57ABCC"
      />
      <path
        d="M74.495 99.504a.274.274 0 0 0-.007-.027l-.008-.027c-.001-.009-.004-.018-.007-.027a.306.306 0 0 0-.007-.026.307.307 0 0 0-.007-.027.307.307 0 0 0-.007-.027l-.007-.027a.306.306 0 0 0-.008-.027.295.295 0 0 0-.007-.027.289.289 0 0 0-.007-.027l-.007-.027a.289.289 0 0 0-.007-.027.289.289 0 0 0-.008-.026.289.289 0 0 0-.007-.027.288.288 0 0 0-.007-.027.289.289 0 0 0-.007-.027.289.289 0 0 0-.007-.027.289.289 0 0 0-.007-.027l-.007-.027-.008-.027c-.001-.009-.004-.018-.007-.027l-.007-.027-.007-.027-.007-.026-.008-.027a.297.297 0 0 0-.007-.027l-.007-.027-.007-.027-.007-.027a.307.307 0 0 0-.007-.027l-.008-.027c-.001-.009-.004-.018-.007-.027a.306.306 0 0 0-.007-.026.307.307 0 0 0-.007-.027l-.007-.027a.295.295 0 0 0-.007-.027.26.26 0 0 0-.008-.027.289.289 0 0 0-.007-.027.289.289 0 0 0-.007-.027l-.007-.027a.289.289 0 0 0-.007-.027.289.289 0 0 0-.007-.026.289.289 0 0 0-.008-.027.288.288 0 0 0-.007-.027.289.289 0 0 0-.007-.027l-.007-.027-.007-.027-.008-.027c-.001-.009-.004-.018-.007-.027l-.007-.027-.007-.027-.007-.026-.007-.027-.008-.027c-.001-.01-.004-.018-.007-.027-.001-.01-.004-.018-.007-.027l-.007-.027-.007-.027-.007-.027-.008-.027c-.001-.009-.004-.018-.007-.027a.306.306 0 0 0-.007-.026l-.007-.027a.295.295 0 0 0-.007-.027.289.289 0 0 0-.008-.027.26.26 0 0 0-.007-.027.289.289 0 0 0-.007-.027.289.289 0 0 0-.007-.027L74 97.648a.289.289 0 0 0-.007-.027.289.289 0 0 0-.007-.026.289.289 0 0 0-.008-.027.288.288 0 0 0-.007-.027l-.007-.027-.007-.027-.007-.027-.008-.027c-.001-.009-.004-.018-.007-.027l-.007-.027-.007-.027-.007-.026-.007-.027-.008-.027c-.001-.01-.004-.018-.007-.027-.001-.01-.004-.018-.007-.027l-.007-.027-.007-.027-.007-.027-.008-.027c-.001-.009-.004-.018-.007-.027a.17.17 0 0 0-.008-.028.2.2 0 0 0-.007-.025l-.007-.027a.295.295 0 0 0-.007-.027.26.26 0 0 0-.007-.027.289.289 0 0 0-.008-.027.289.289 0 0 0-.007-.027l-.007-.027a.289.289 0 0 0-.007-.027.289.289 0 0 0-.007-.026c-.01-.056-.052-.11-.125-.153a.681.681 0 0 0-.615 0c-.074.042-.116.097-.125.152a.102.102 0 0 0-.007.027.099.099 0 0 0-.007.027.099.099 0 0 0-.007.027.098.098 0 0 0-.007.027.099.099 0 0 0-.008.027.147.147 0 0 0-.007.027l-.007.027-.007.027a.255.255 0 0 0-.007.025.17.17 0 0 0-.008.028.143.143 0 0 0-.007.027l-.008.027-.007.027-.007.027c-.004.009-.005.018-.007.027-.004.009-.005.018-.007.027a.149.149 0 0 0-.007.027.149.149 0 0 0-.008.027.157.157 0 0 0-.007.026.149.149 0 0 0-.007.027.149.149 0 0 0-.007.027.14.14 0 0 0-.007.027.149.149 0 0 0-.008.027.149.149 0 0 0-.007.027.149.149 0 0 0-.007.027.297.297 0 0 0-.007.027l-.007.027a.289.289 0 0 0-.007.027.289.289 0 0 0-.008.026l-.007.027a.289.289 0 0 0-.007.027.289.289 0 0 0-.007.027.288.288 0 0 0-.007.027.289.289 0 0 0-.007.027.289.289 0 0 0-.008.027.289.289 0 0 0-.007.027l-.007.027a.307.307 0 0 0-.007.026.307.307 0 0 0-.007.027c-.003.01-.006.018-.007.027a.307.307 0 0 0-.008.027.307.307 0 0 0-.007.027.307.307 0 0 0-.007.027.306.306 0 0 0-.007.027l-.007.027a.307.307 0 0 0-.007.027l-.008.027-.007.027-.007.026-.007.027c-.003.01-.006.018-.007.027l-.008.027-.007.027-.007.027a.297.297 0 0 0-.007.027.289.289 0 0 0-.007.027.289.289 0 0 0-.007.027.289.289 0 0 0-.008.026l-.007.027a.289.289 0 0 0-.007.027.289.289 0 0 0-.007.027.288.288 0 0 0-.007.027.289.289 0 0 0-.007.027.289.289 0 0 0-.008.027.295.295 0 0 0-.007.027l-.007.027a.307.307 0 0 0-.007.026l-.007.027c-.003.01-.006.018-.007.027a.307.307 0 0 0-.008.027.307.307 0 0 0-.007.027l-.007.027a.306.306 0 0 0-.007.027.307.307 0 0 0-.007.027c-.003.009-.006.018-.007.027l-.008.027-.007.026-.007.027-.007.027c-.003.01-.006.018-.007.027-.003.01-.006.018-.007.027l-.008.027a.289.289 0 0 0-.007.027.288.288 0 0 0-.007.027.289.289 0 0 0-.007.027.289.289 0 0 0-.007.027.289.289 0 0 0-.008.026l-.007.027a.289.289 0 0 0-.007.027.289.289 0 0 0-.007.027.288.288 0 0 0-.007.027.295.295 0 0 0-.007.027l-.008.027a.307.307 0 0 0-.007.027l-.007.027-.007.026-.007.027a.274.274 0 0 0-.007.027.307.307 0 0 0-.008.027.307.307 0 0 0-.007.027c-.067.217.045.45.335.618.473.272 1.24.272 1.713 0 .291-.168.402-.4.335-.618h-.082Z"
        fill="#CF3838"
      />
      <path
        d="m73.074 96.893-.901 3.372.916.242.191-3.603-.206-.01Z"
        fill="#E64747"
      />
      <path
        d="M73.612 96.635c.17.098.17.257 0 .355a.682.682 0 0 1-.615 0c-.17-.097-.17-.257 0-.355a.682.682 0 0 1 .615 0Z"
        fill="#F66"
      />
      <path
        d="M73.57 92.295c.012-.047-.013-.097-.076-.133a.421.421 0 0 0-.382 0c-.062.036-.087.086-.076.133a.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .044.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .044.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .044.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .044.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .044.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .044.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .044.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .044.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .044.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .044.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .044.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .044.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .044.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .044.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .044.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .044.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .044.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045c-.011.046.014.097.076.132a.421.421 0 0 0 .382 0c.063-.035.088-.086.077-.132a.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.044.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.044.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.044.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.044.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.044.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.044.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.044.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.044.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.044.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.044.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.044.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.044.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.044.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.044.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.044.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.044.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.044.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045Z"
        fill="#E8F6FF"
      />
      <path
        d="M73.57 95.291a.08.08 0 0 0 .002-.038c-.007.034-.032.068-.078.094a.421.421 0 0 1-.382 0 .176.176 0 0 1-.064-.06c-.005 0-.008-.002-.013-.003v.006a.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045.094.094 0 0 0 0 .044.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045c-.011.047.014.097.077.133a.421.421 0 0 0 .382 0c.062-.036.087-.086.076-.133a.094.094 0 0 0 0-.045.094.094 0 0 0 0-.044.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045v.001ZM73.57 94.247a.08.08 0 0 0 .002-.039c-.007.034-.032.068-.078.094a.422.422 0 0 1-.382 0 .177.177 0 0 1-.064-.06l-.013-.002v.006a.094.094 0 0 0 0 .045.094.094 0 0 0 0 .044.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.095.095 0 0 0 0 .045c-.011.046.014.096.077.132a.421.421 0 0 0 .382 0c.062-.035.087-.086.076-.132a.095.095 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.044.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045ZM73.57 93.273a.08.08 0 0 0 .002-.038c-.007.034-.032.068-.078.094a.421.421 0 0 1-.382 0 .176.176 0 0 1-.064-.06c-.005 0-.008-.002-.013-.003v.006a.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .044.095.095 0 0 0 0 .045.094.094 0 0 0 0 .045.094.094 0 0 0 0 .045c-.011.047.014.097.077.133a.421.421 0 0 0 .382 0c.062-.036.087-.086.076-.133a.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.044.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.094.094 0 0 0 0-.045.095.095 0 0 0 0-.045v.001Z"
        fill="#C23131"
      />
      <path
        d="M9.975 81.3s.491 1.294 2.251 2.743c1.76 1.449 2.355 2.044 2.51 3.442.156 1.398.26 1.837-.647 2.355-.905.518-2.277.648-3.494.181-1.216-.466-2.924-1.552-3.882-2.82-.957-1.268-1.397-1.89-1.397-1.89l-.078.467s-1.58-1.398-1.863-1.837c-.285-.44-.285-2.536-.285-2.536l6.883-.103.002-.002Z"
        fill="#422D04"
      />
      <path
        d="M16.458 75.73s1.281 1.086 2.93 2.232c1.65 1.145 2.543 1.805 2.543 3.028 0 1.222.078 2.174-1.028 2.542-1.106.369-2.135.078-3.086-.505-.951-.582-3.416-2.29-4.794-4.017 0 0 .078.408.02.408-.058 0-2.64-1.941-3.047-2.581-.408-.64-.408-3.203-.408-3.203s6.58 1.708 6.87 2.096Z"
        fill="#291C03"
      />
      <path
        d="M22.078 79.835s.524 2.057-.97 2.756c-1.495.698-2.31.33-3.242-.175-.931-.505-1.555-.919-3.027-2.116-1.492-1.212-5.182-4.91-5.182-4.91s-.582 2.795-.582 2.853c0 .057 7.336 6.114 7.55 6.21.214.098 6.017 1.107 6.095.952.078-.155.622-2.174.35-2.873-.272-.698-.99-2.697-.99-2.697h-.002Z"
        fill="#876014"
      />
      <path
        d="M16.899 73.097c-.32-.453-.675-.887-1.013-1.318-.78-1.02-1.54-2.072-2.109-3.218a6.2 6.2 0 0 1-.136-.458v-.134c.029-1.131-.488-2.167-1.234-2.98-.759-.827-1.89-1.185-2.979-1.234a3.387 3.387 0 0 0-1.021.122l-.024-2.685.698-22.127 10.442-.698c0 .272-.418 9.271-.457 13.463-.038 4.193-1.427 6.992-2.049 11.03-.493 3.203-.312 6.7-.12 10.238h.002Z"
        fill="#757403"
      />
      <path
        d="M16.913 75.618c.21 1.25-1.085 2.247-1.085 2.247l-.092.034c-1.302-1.147-2.923-1.694-4.525-2.317a6.092 6.092 0 0 1-.672-.373 3.233 3.233 0 0 0-.527-.275l-.37-12.691c.537.493 2.375 1.569 5.065 1.076 2.068-.38 2.413-1.103 2.462-1.417-.025 1.21-.192 9.305-.206 10.95-.016 1.777-.051 2.766-.051 2.766Z"
        fill="#291C03"
      />
      <path
        d="m10.084 76.862-.322-.248-1.882-.807a4.2 4.2 0 0 0-2.127-.576l-1.12.15c-.663.152-1.246.512-1.73.976.009-2.917-.024-6.363-.197-8.433-.314-3.743-.105-4.752-.182-6.888-.078-2.135-.427-13.548-.427-16.537 0-2.989-.195-4.387 0-5.163.194-.776 13.47 2.562 13.47 2.562s-1.669 1.515-2.057 3.571c-.388 2.058-1.126 7.376-1.165 10.094-.038 2.717-1.28 5.59-1.863 9.161-.369 2.264-.413 8.138-.397 12.138h-.002Z"
        fill="#8C8A03"
      />
      <path
        d="M8.1 13.431s-2.51.984-3.844 1.501c-1.333.517-2.303 1.85-2.51 3.818-.208 1.966 1.397 7.401 1.5 10.455.104 3.054-1.19 10.973-1.19 10.973s2.484 4.554 7.557 4.244c5.072-.31 7.768-1.993 9.942-5.617 0 0-.728-4.27-.056-8.41.673-4.141 1.424-6.78 1.372-9.084-.052-2.303-.31-3.804-.388-5.254-.079-1.449.078-3.027-.984-4.089-1.061-1.062-2.019-1.268-3.416-1.605C14.686 10.027 8.1 13.43 8.1 13.43v.001Z"
        fill="#C79F00"
      />
      <path
        d="M9.723 10.348s.127.815-.408 1.766c-.533.951-1.456 1.378-1.456 1.378s1.456 3.232 3.63 3.95c2.173.718 3.532.233 4.115-1.456.581-1.688-1.708-4.677-1.767-4.677-.058 0-4.115-.961-4.115-.961h.001Z"
        fill="#FAB69B"
      />
      <path
        d="M11.215 12.195c-.026.038.155 1.708.647 2.536.492.829 1.644 2.458 3.118 3.184 1.475.724 1.722-2.084 1.566-2.303-.155-.22-5.331-3.416-5.331-3.416v-.001Z"
        fill="#F2A18B"
      />
      <path
        d="M16.96 38.652s2.6-1.524 3.496-3.317c0 0 .627-10.983.403-16.362-.224-5.38-.583-6.231-1.188-7.128-.605-.896-2.78-1.008-3.676-.852-.896.157-1.456.314-1.456.314s1.972 2.287 2.196 4.147c.224 1.86.733 9.93.643 14.77-.09 4.842-.419 8.428-.419 8.428ZM7.635 13.22s1.569.792 2.824 2.974c1.255 2.183 1.3 5.424 1.524 8.742.232 3.434-.09 16.272-.09 16.272s-3.72 1.031-6.589-1.12c-2.869-2.152-3.183-3.049-3.183-3.049s-.986-14.315-.941-17.184c.045-2.869 2.376-5.933 6.455-6.635Z"
        fill="#73850C"
      />
      <path
        d="M19.538 10.338s-.013-2.277-.181-3.17c-.17-.893-1.877-4.076-3.895-4.801-2.02-.725-4.115-.078-4.736 1.527-.621 1.605-1.061 3.416-1.01 4.425.053 1.01 1.087 2.588 1.32 3.52.234.931.57 2.251 1.14 2.846.569.596 2.749 2.058 3.642 2.175.893.116 1.281-.437 1.475-.835.193-.398.252-1.01.495-1.175.242-.165.611-.243.63-.63.02-.389-.136-.748-.086-1.039.048-.291.378-1.34.69-1.815.31-.475.559-.95.517-1.028h-.001Z"
        fill="#FDC6AA"
      />
      <path
        d="M11.12 10.31s-.174-1.087-1.096-.806c-.921.282-.834 1.35-.34 2.135.495.786 1.02.805 1.282.728.261-.078.233-.058.243-.66.01-.602-.204-.553-.087-1.398h-.001Z"
        fill="#FFCFB5"
      />
      <path
        d="M10.253 4.14c.247-.566.504-1.203 1.043-1.553.909-.591 1.738-.184 2.642.153.921.344 1.863.632 2.788.967.473.171.743-.351.584-.719.052.02.103.043.152.068.488.247.77.711.956 1.213a.512.512 0 0 0-.099.614c.167.33.345.659.496.995.1.537.196 1.076.375 1.592a.53.53 0 0 0 .414.355c-.091.36-.28.745-.662 1.013-.919.647-1.798.738-2.613.479-.815-.26-.97-.698-1.268-.595-.297.103-.75.452-.815.867-.064.414.336.543.22.918-.117.376-.634.389-1.06.44-.428.053-.337.35-.532.532-.193.18-.776.193-1.048-.026-.271-.22-.259-.88-.582-1.294-.324-.414-.518-.557-.92-.57-.4-.012-.633.996-.633.996s-.155.634-.362-1.229c-.135-1.213 0-2.727.212-3.865.298-.412.506-.876.713-1.349l-.001-.002Z"
        fill="#5C3419"
      />
      <path
        d="M14.808 87.143s.272 2.019-1.242 2.387c-1.515.368-3.067.136-4.134-.505-1.068-.64-2.058-1.223-2.99-2.62-.93-1.398-3.843-4.25-3.843-4.25l.35 2.27s3.357 5.493 3.435 5.707c.078.213 7.007 3.027 7.085 3.008.078-.02 3.144-1.59 3.202-2.367.059-.777-.058-1.67-.174-1.844-.117-.175-1.69-1.786-1.69-1.786h.001Z"
        fill="#876014"
      />
      <path
        d="M15.117 11.534c4.31 0 7.805-2.017 7.805-4.506 0-2.489-3.495-4.506-7.805-4.506-4.311 0-7.806 2.017-7.806 4.506 0 2.489 3.495 4.506 7.806 4.506Z"
        fill="#C48231"
      />
      <path
        d="M15.117 9.205c2.422 0 4.386-1.134 4.386-2.533S17.54 4.14 15.117 4.14 10.73 5.273 10.73 6.672s1.964 2.533 4.387 2.533ZM15.117 2.763c1.321 0 2.393-.618 2.393-1.381S16.438 0 15.117 0c-1.322 0-2.393.619-2.393 1.382 0 .763 1.071 1.381 2.393 1.381Z"
        fill="#EB9C3B"
      />
      <path
        d="M19.543 6.727h-8.799V4.358A4.35 4.35 0 0 1 15.092.011h.077a4.376 4.376 0 0 1 4.374 4.374v2.342Z"
        fill="#EB9C3B"
      />
      <path
        d="M9.975 81.3s.036-.988.051-2.767c.015-1.778.209-11.102.209-11.102S10.459 68.507 7.77 69c-2.69.493-4.528-.583-5.066-1.076l.426 14.591s.493.695 1.905 1.345 3.855-.314 3.855-.314 1.296-.997 1.085-2.246Z"
        fill="#422D04"
      />
      <path
        d="M25.46 44.187c.676-.39.676-1.654.001-2.824-.675-1.169-1.77-1.8-2.445-1.41-.676.389-.676 1.653 0 2.822.675 1.17 1.77 1.802 2.445 1.412Z"
        fill="#D5DBD5"
      />
      <path
        d="M25.243 44.306c.675-.39.675-1.654 0-2.824-.675-1.169-1.77-1.8-2.445-1.41-.675.389-.676 1.653 0 2.822.675 1.17 1.77 1.802 2.445 1.412Z"
        fill="#9FA8B5"
      />
      <path
        d="M22.541 41.113c-.196.743.246 1.876.987 2.53.742.654 1.502.583 1.697-.16.197-.744-.245-1.876-.987-2.53-.741-.655-1.502-.583-1.697.16Z"
        fill="#6B9479"
      />
      <path
        d="M17.639 38.307c.314-.045 1.696.045 2.1.074.403.03 1.046.822 1.194 1.136.15.314-.88.33-.926.33-.044 0-1.03-.24-1.09-.285-.06-.045-1.278-1.255-1.278-1.255Z"
        fill="#EBB193"
      />
      <path
        d="M26.587 37.874c1.024-.538 1.533-1.588 1.136-2.344-.397-.756-1.55-.933-2.575-.394-1.025.538-1.533 1.587-1.136 2.344.397.756 1.55.932 2.575.394Z"
        fill="#997B00"
      />
      <path
        d="M24.296 36.715s.448.65.493 1.256c.044.605-.292 1.59-.202 1.882.09.292.941.381 2.062-.022 1.12-.404 2.72-.725 2.786-1.375.068-.65-.477-1.225-1.06-1.45-.583-.223-1.63-2.017-1.63-2.017s-.477-.23-1.06-.044c-.583.186-1.248.642-1.45 1.038-.201.396.06.732.06.732Z"
        fill="#FDC6AA"
      />
      <path
        d="m69.328 34.72-.04-.06c-.027-.044-.066-.102-.12-.18a14.878 14.878 0 0 0-.483-.652 17.26 17.26 0 0 0-2.012-2.147 15.767 15.767 0 0 0-3.366-2.34 14.65 14.65 0 0 0-2.063-.846 13.914 13.914 0 0 0-2.205-.49l-.562-.056c-.094-.008-.19-.023-.284-.024l-.282-.01c-.189-.005-.381-.018-.57-.015l-.57.018c-.095.004-.194.001-.287.012-.094.01-.188.018-.283.027l-.573.056-.567.093-.287.046c-.096.017-.188.042-.283.062l-.567.13-.144.034-.14.04c-.093.029-.186.056-.28.084l-.566.168-.56.184-2.296.757-9.775 3.22c-13.309 4.384-28.753 9.516-28.753 9.516-.277.091-.326.527-.108.973.218.447.62.734.896.642l.008-.003s15.293-5.439 28.45-10.131l9.662-3.447 2.27-.81.554-.197.55-.177c.092-.03.182-.06.273-.088l.135-.044.14-.036.552-.14c.091-.022.18-.049.274-.067l.279-.052.551-.103a332.576 332.576 0 0 0 .832-.1c.09-.013.186-.012.278-.018l.552-.029c.184-.006.37.003.553.004.092 0 .183.002.274.003.09 0 .184.013.275.02.184.013.365.028.545.042.73.092 1.441.229 2.134.435.693.212 1.361.477 1.993.784a15.062 15.062 0 0 1 3.25 2.203c.879.774 1.524 1.515 1.943 2.034a14.02 14.02 0 0 1 .57.77l.036.055.004.007c.065.097.16.141.212.097.052-.044.043-.157-.02-.254h.001Z"
        fill="#997114"
      />
      <path
        d="M69.226 95.955h-.18V34.942c-2.667-.91-7.602-5.395-8.145-5.894-.284.113-1.674.66-3.262 1.205-1.7.583-5.18-.224-5.686-.346-.307.388-2.383 2.936-4.384 3.622-1.98.679-4.921-.033-5.421-.162-.216.388-1.424 2.421-3.527 3.142-2.175.746-5.837.447-6.268.408l-7.685 7.424-.125-.129 7.744-7.481.042.004c.04.004 3.968.381 6.233-.395 2.248-.771 3.448-3.095 3.46-3.118l.033-.066.071.019c.033.009 3.315.895 5.385.185 2.072-.71 4.314-3.58 4.337-3.609l.036-.047.057.015c.038.01 3.895.963 5.64.365a77.367 77.367 0 0 0 3.306-1.223l.053-.022.041.039c.055.05 5.473 5.035 8.184 5.913l.062.02v61.142l-.001.002Z"
        fill="#598568"
      />
      <path
        d="M24.282 44.875c.675-.39.676-1.654 0-2.824-.675-1.17-1.77-1.801-2.445-1.411-.675.39-.675 1.654 0 2.823.675 1.17 1.77 1.802 2.445 1.412Z"
        fill="#D5DBD5"
      />
      <path
        d="M24.065 44.993c.675-.39.675-1.654 0-2.824-.675-1.169-1.77-1.8-2.445-1.41-.675.39-.676 1.653 0 2.822.675 1.17 1.77 1.802 2.445 1.412Z"
        fill="#9FA8B5"
      />
      <path
        d="M21.455 41.979c-.17.65.216 1.64.864 2.212.648.572 1.312.509 1.483-.14.172-.65-.215-1.64-.863-2.212-.648-.572-1.312-.51-1.484.14Z"
        fill="#CED4CE"
      />
      <path
        d="M14.344 40.138c.506.306.78 1.003 1.182 1.478.402.475.876 1.193 1.585 1.309.707.116 2.449-.57 2.935-.845.486-.274.718-.158.887-.528.168-.37.263-.919.211-1.182-.053-.264-1.006-1.31-1.554-1.458-.55-.148-2.046-.686-2.89-.907-.845-.222-1.51-.423-1.51-.423l-.845 2.556h-.001Z"
        fill="#FDC6AA"
      />
      <path
        d="M7.288 18.517 5.957 30.478l10.255 6.56-1.748 3.944s-12.876-6.485-14.1-8.32c-1.224-1.835.99-13.16 1.46-14.948.427-1.622 2.946-4.058 5.06-1.192.424.573.573 1.303.403 1.995h.001Z"
        fill="#E3BA17"
      />
      <path
        d="M24.535 39.637s-.135-1.076.269-1.54c.403-.463 1.883-.552 2.36-.79.478-.24 1.599-.524 1.988-.27.388.254.284 1.285.284 1.285l-1.464.941-1.853.628-1.584-.254Z"
        fill="#FDC6AA"
      />
    </g>
  </svg>
);

export default FishermanFishing;