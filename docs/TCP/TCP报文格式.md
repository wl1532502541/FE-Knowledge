# TCP报文格式



![](https://cdn.nlark.com/yuque/0/2021/jpeg/12821255/1617083212278-14e14977-91ad-4962-a335-1246b5ef430a.jpeg#align=left&display=inline&height=462&id=JTTrS&margin=%5Bobject%20Object%5D&originHeight=427&originWidth=554&size=0&status=done&style=none&width=599)
![](https://cdn.nlark.com/yuque/0/2021/png/12821255/1626343697103-9769c11a-b563-48a1-9bf0-348aabe7292b.png#align=left&display=inline&height=315&margin=%5Bobject%20Object%5D&originHeight=315&originWidth=988&size=0&status=done&style=none&width=988)
其中比较重要的字段有：
（1）序号（sequence number）：Seq序号，占32位，用来标识从TCP源端向目的端发送的字节流，发起方发送数据时对此进行标记。
（2）确认号（acknowledgement number）：Ack序号，占32位，只有ACK标志位为1时，确认序号字段才有效，Ack=Seq+1。
（3）标志位（Flags）：共6个，即URG、ACK、PSH、RST、SYN、FIN等。具体含义如下：
URG：紧急指针（urgent pointer）有效。ACK：确认序号有效。PSH：接收方应该尽快将这个报文交给应用层。RST：重置连接。SYN：发起一个新连接。FIN：释放一个连接。
需要注意的是：
不要将确认序号Ack与标志位中的ACK搞混了。确认方Ack=发起方Seq+1，两端配对。