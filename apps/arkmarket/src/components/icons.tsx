import * as React from "react";

import { env } from "~/env";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => {
    return (
      <div>
        {env.NEXT_PUBLIC_THEME === "unframed" ? (
          <svg width="144" height="32" viewBox="0 0 144 32" fill="none">
            <path
              d="M40.3049 24.6446C43.6151 24.6446 46.5942 22.6404 46.5942 18.2722V7.42871H42.3929V18.1437C42.3929 19.8396 41.5017 20.6618 40.3049 20.6618C39.1082 20.6618 38.217 19.8396 38.217 18.1437V7.42871H34.0156V18.2722C34.0156 22.6404 36.9948 24.6446 40.3049 24.6446ZM48.5294 24.3877H52.7307V17.0388C52.7307 15.6512 53.4946 14.8547 54.6914 14.8547C55.8881 14.8547 56.652 15.6512 56.652 17.0388V24.3877H60.8534V15.7283C60.8534 12.5935 59.0964 10.8719 56.6265 10.8719C54.615 10.8719 53.2655 11.8226 52.7817 14.5206H52.6289V11.1289H48.5294V24.3877ZM63.807 24.3877H68.0084V15.7797H70.8348V12.0539H68.0084C68.0084 11.0518 68.263 10.6406 69.4088 10.6406H70.5801V7.42871H69.1288C65.7931 7.42871 63.807 8.585 63.807 12.0539H62.2029V15.7797H63.807V24.3877ZM79.5176 10.8719C78.1171 10.8719 76.7167 12.1824 76.513 15.3429H76.3602V11.1289H72.2607V24.3877H76.462V17.9638C76.462 16.5763 77.0986 15.7797 78.6009 15.7797H80.3069V10.9233C79.9504 10.8719 79.6958 10.8719 79.5176 10.8719ZM95.1517 24.3877H99.353V17.0388C99.353 15.6512 99.9641 14.8547 101.008 14.8547C102.052 14.8547 102.663 15.6512 102.663 17.0388V24.3877H106.865V17.0388C106.865 15.6512 107.476 14.8547 108.52 14.8547C109.564 14.8547 110.175 15.6512 110.175 17.0388V24.3877H114.376V15.7283C114.376 12.5935 112.645 10.8719 110.455 10.8719C108.52 10.8719 107.221 12.131 106.941 14.5206H106.763C106.381 12.1567 104.828 10.8719 102.943 10.8719C101.11 10.8719 99.8878 11.8226 99.404 14.5206H99.2512V11.1289H95.1517V24.3877ZM122.626 24.6446C125.682 24.6446 128.33 22.9744 128.788 19.9938H124.485C124.281 20.8931 123.543 21.3813 122.524 21.3813C121.455 21.3813 120.538 20.816 120.258 19.0944H128.788V17.7583C128.788 13.6213 125.962 10.8719 122.371 10.8719C118.781 10.8719 115.955 13.6213 115.955 17.7583C115.955 21.8952 118.603 24.6446 122.626 24.6446ZM139.1 20.9959V24.3877H143.2V7.42871H138.999V14.5206H138.897C138.413 11.8226 136.885 10.8719 135.103 10.8719C132.327 10.8719 130.188 13.4157 130.188 17.7583C130.188 22.1008 132.327 24.6446 135.103 24.6446C136.885 24.6446 138.413 23.6939 138.948 20.9959H139.1ZM138.999 17.7583C138.999 19.8653 137.929 20.6875 136.834 20.6875C135.714 20.6875 134.644 19.8653 134.644 17.7583C134.644 15.6512 135.714 14.829 136.834 14.829C137.929 14.829 138.999 15.6512 138.999 17.7583ZM80.4597 20.4563C80.4597 23.0515 82.3185 24.6446 84.712 24.6446C86.7235 24.6446 87.9712 23.6425 88.5568 21.9209H88.7096V24.3877H92.8091V16.1652C92.8091 12.9532 91.0522 10.8719 86.9018 10.8719C83.5661 10.8719 81.1217 12.5421 80.918 15.7797H85.2212C85.2212 14.6234 85.9342 14.1352 86.8508 14.1352C87.8693 14.1352 88.6078 14.6234 88.6078 15.9339V16.345H86.0106C82.0638 16.345 80.4597 18.1437 80.4597 20.4563ZM84.661 20.0965C84.661 19.5056 85.0684 19.0944 86.1633 19.0944H88.6078V19.2486C88.6078 21.0216 87.6147 21.3813 86.3161 21.3813C85.2467 21.3813 84.661 20.9445 84.661 20.0965ZM120.232 16.345C120.487 14.5977 121.226 14.1352 122.27 14.1352C123.492 14.1352 124.281 14.829 124.332 16.345H120.232Z"
              fill="currentColor"
            />
            <path
              d="M0 3.96371e-06L7.85293 7.56589V14.3566L0 12.186V3.96371e-06Z"
              fill="currentColor"
            />
            <path
              d="M1.96323 16H7.85293V21.9535L1.96323 25.4574V16Z"
              fill="currentColor"
            />
            <path
              d="M0 32L7.85293 24.4341H12.7303L11.9021 32H0Z"
              fill="currentColor"
            />
            <path
              d="M15.3991 30.1085L14.7242 24.4341H16.7795L20.6446 30.1085H15.3991Z"
              fill="currentColor"
            />
            <path
              d="M27.5161 32L19.6632 24.4341V17.6434L27.5161 19.814V32Z"
              fill="currentColor"
            />
            <path
              d="M25.5529 16H19.6632V10.0465L25.5529 6.54263V16Z"
              fill="currentColor"
            />
            <path
              d="M27.5161 0L19.6632 7.56589H14.7858L15.614 0H27.5161Z"
              fill="currentColor"
            />
            <path
              d="M12.117 1.89147L12.7919 7.56589H10.7366L6.8715 1.89147H12.117Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            width="225"
            height="30"
            viewBox="0 0 225 30"
            fill="none"
            {...props}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.2918 26.573C24.624 25.9327 30.4591 18.0355 29.9726 11.5741C29.5478 6.13532 23.729 3.35184 16.1297 3.93194C7.1089 4.62891 -0.429185 9.76167 0.019011 15.7571C0.491241 21.7728 8.69243 27.1531 16.2918 26.573ZM16.2301 15.3191C16.4039 15.4587 16.522 15.4463 16.6007 15.4381C16.8369 15.4133 16.9583 15.2427 16.9337 15.0085C16.8354 14.0718 15.5154 11.9217 12.9568 12.1901C10.3051 12.4255 8.87431 14.4336 9.10977 16.6778C9.17529 17.3023 9.49463 17.8804 9.9473 17.8329C10.1048 17.8164 10.2717 17.7002 10.2905 17.501C10.527 15.5821 12.0732 14.743 13.5014 14.5931C14.2493 14.5147 15.3376 14.6611 16.2301 15.3191ZM20.3718 14.5887C20.2878 14.7357 20.1914 14.7655 20.0733 14.7779C19.8962 14.7965 19.7183 14.6179 19.6896 14.3446C19.4869 12.4127 20.8562 10.6709 22.9818 10.4479C25.1665 10.2186 26.9109 11.6732 27.13 13.7613C27.1648 14.093 27.1258 14.6693 26.7715 14.7065C26.6534 14.7189 26.5313 14.6922 26.4341 14.5248C25.4634 13.0483 24.0841 12.7984 22.8638 12.9265C21.7419 13.0442 20.9583 13.5407 20.3718 14.5887Z"
              fill="#64748B"
            />
            <path
              d="M41.7881 23.3058C37.0984 23.3058 33.9991 20.1658 33.9991 15.8635C33.9991 11.5612 37.0984 8.42118 41.7473 8.42118C46.0088 8.42118 48.6595 10.9495 49.0061 14.6197H45.2544C45.0097 12.54 43.5212 11.4389 41.7269 11.4389C39.7899 11.4389 37.8936 12.907 37.8936 15.8635C37.8936 18.7997 39.7899 20.2881 41.7677 20.2881C43.7047 20.2881 45.2136 19.1259 45.499 17.1073H49.2508C48.9042 20.9202 45.9476 23.3058 41.7881 23.3058ZM59.2927 23.3058C54.7049 23.3058 51.4222 20.1658 51.4222 15.8635C51.4222 11.5612 54.7049 8.42118 59.2927 8.42118C63.8804 8.42118 67.1632 11.5612 67.1632 15.8635C67.1632 20.1658 63.8804 23.3058 59.2927 23.3058ZM59.2927 20.1658C61.2705 20.1658 63.2687 18.7997 63.2687 15.8635C63.2687 12.907 61.2705 11.5612 59.2927 11.5612C57.3149 11.5612 55.3166 12.907 55.3166 15.8635C55.3166 18.7997 57.3149 20.1658 59.2927 20.1658ZM70.0003 23V8.74742H89.8193V23H86.2919V11.9079H81.6837V23H78.1563V11.9079H73.5481V23H70.0003ZM102.243 23.3058C100 23.3058 98.0425 22.0213 97.3493 19.3706H97.2473V26.0585H93.5363V8.74742H97.2473V12.3564H97.3493C98.0425 9.70575 100 8.42118 102.243 8.42118C105.587 8.42118 108.421 10.8272 108.421 15.8635C108.421 20.8998 105.587 23.3058 102.243 23.3058ZM97.2473 16.516C97.2473 18.7589 98.5115 20.1658 100.693 20.1658C102.651 20.1658 104.527 18.8201 104.527 15.8635C104.527 12.9274 102.651 11.5612 100.693 11.5612C98.5115 11.5612 97.2473 12.9681 97.2473 15.211V16.516ZM119.108 23V20.3289H119.006C118.353 22.3067 116.824 23.3262 114.663 23.3262C111.971 23.3262 109.626 21.7562 109.626 18.7181C109.626 16.0674 111.461 14.2935 115.58 14.2935H119.108V11.8875H111.196V8.74742H122.819V23H119.108ZM113.052 18.7385C113.052 20.0027 114.173 20.5736 115.723 20.5736C117.782 20.5736 119.108 19.7172 119.108 17.7394V17.0054H115.662C113.969 17.0054 113.052 17.5151 113.052 18.7385ZM126.531 23V8.74742H130.242V12.4788H130.344C131.037 9.70575 132.811 8.42118 134.972 8.42118C138.031 8.42118 140.396 10.3786 140.396 14.3954V23H136.685V15.211C136.685 13.0905 135.482 11.704 133.463 11.704C131.445 11.704 130.242 13.0905 130.242 15.211V23H126.531ZM147.923 22.0417L141.785 8.74742H146.088L149.656 17.8821H149.88L153.469 8.74742H157.751L151.634 22.0417V26.0585H147.923V22.0417ZM165.558 23V5.66854H169.269V23H165.558ZM180 23.3058C175.412 23.3058 172.129 20.1658 172.129 15.8635C172.129 11.5612 175.412 8.42118 180 8.42118C184.587 8.42118 187.87 11.5612 187.87 15.8635C187.87 20.1658 184.587 23.3058 180 23.3058ZM180 20.1658C181.977 20.1658 183.976 18.7997 183.976 15.8635C183.976 12.907 181.977 11.5612 180 11.5612C178.022 11.5612 176.024 12.907 176.024 15.8635C176.024 18.7997 178.022 20.1658 180 20.1658ZM190.73 26.0585V23.3262H199.09C199.579 23.3262 199.804 23.1019 199.804 22.6126V17.7802H199.702C199.049 19.7784 197.499 20.7775 195.318 20.7775C192.239 20.7775 189.751 18.6977 189.751 14.5993C189.751 10.501 192.239 8.42118 195.318 8.42118C197.499 8.42118 199.049 9.42029 199.702 11.4185H199.804V8.74742H203.514V22.5718C203.514 25.1002 202.373 26.0585 199.763 26.0585H190.73ZM193.279 14.5993C193.279 16.883 194.461 18.0452 196.562 18.0452C198.437 18.0452 199.804 17.1685 199.804 15.1906V14.008C199.804 12.0302 198.437 11.1534 196.562 11.1534C194.461 11.1534 193.279 12.2953 193.279 14.5993ZM214.248 23.3058C209.661 23.3058 206.378 20.1658 206.378 15.8635C206.378 11.5612 209.661 8.42118 214.248 8.42118C218.836 8.42118 222.119 11.5612 222.119 15.8635C222.119 20.1658 218.836 23.3058 214.248 23.3058ZM214.248 20.1658C216.226 20.1658 218.224 18.7997 218.224 15.8635C218.224 12.907 216.226 11.5612 214.248 11.5612C212.271 11.5612 210.272 12.907 210.272 15.8635C210.272 18.7997 212.271 20.1658 214.248 20.1658Z"
              fill="currentColor"
            />
          </svg>
        )}
      </div>
    );
  },
};
