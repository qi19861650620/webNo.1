            // 更新时间函数
            function updateTime() {
                // 创建一个日期对象
                var date = new Date();

                // 获取年月日、星期、时分秒
                var year = date.getFullYear();         // 年
                var month = date.getMonth() + 1;        // 月 JavaScript中月份从0开始，所以要加1
                var day = date.getDate();              // 日
                var weekday = ['日', '一', '二', '三', '四', '五', '六'][date.getDay()];    // 星期，利用数组存储对应汉字
                var hour = date.getHours();            // 时
                var minute = date.getMinutes();        // 分
                var second = date.getSeconds();        // 秒

                // 将获取的时间拼接在一起（注意：换行要使用<br>标签）
                var dataStr = year + '&nbsp年&nbsp' + month + '&nbsp月&nbsp' + day + '&nbsp日&nbsp' + '&nbsp星期' + weekday + '<br>';
                var timeStr = (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);
                // 将时间显示在页面指定的位置
                document.getElementById("data").innerHTML = dataStr;
                document.getElementById("time").innerHTML = timeStr;
            }

            // 每隔一秒更新时间，实现实时展示
            setInterval(updateTime, 1000);