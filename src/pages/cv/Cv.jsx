import { Flex } from "antd"

import styles from "./Cv.module.css"
export default function Cv() {
    return (
        <Flex vertical gap={10} className={styles.cv}>
            <div className={styles.container}>
                <div className={styles.item}>
                    Oleksandr Shvab
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.title}>Skils:</div>

                <div className={styles.item}>
                    HTML5 & CSS3
                </div>
                <div className={styles.item}>
                    JavaScript (ES6+)</div>
                <div className={styles.item}>
                    React.js
                </div>
                <div className={styles.item}>
                    Responsive Web Design
                </div>
                <div className={styles.item}>
                    Git & GitHub
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.title}>
                    Contact:
                </div>

                <div className={styles.item}>
                    Email: email@email.com
                </div>
                <div className={styles.item}>
                    Phone: +99 999 999 999
                </div>
                <div className={styles.item}>
                    GitHub: github.com/userName
                </div>
            </div>
        </Flex>
    )
}