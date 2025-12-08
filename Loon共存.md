# iOS Loon 与懒猫微服共存配置

## 操作步骤

1. 打开 Loon，底部选择 **配置** → **高级配置**

  ![配置截图](https://pic1.imgdb.cn/item/6936bc4a2a4ee13cb951c8cd.png)

2. 需要修改以下三项设置：
   - **IP Stack**
   - **绕过路由**
   - **代理模式**

   ![image.png](IOS%20loon%E4%B8%8E%E6%87%92%E7%8C%AB%E5%BE%AE%E6%9C%8D%E5%85%B1%E5%AD%98%E9%85%8D%E7%BD%AE/image%201.png)

   ![image.png](IOS%20loon%E4%B8%8E%E6%87%92%E7%8C%AB%E5%BE%AE%E6%9C%8D%E5%85%B1%E5%AD%98%E9%85%8D%E7%BD%AE/image%202.png)

3. **IP Stack 设置**
   - 点击 **IP Stack**
   - 更改查询模式为 **IPv4&IPv6**
   - TUN IPV6 配置为 **开启**

   ![image.png](IOS%20loon%E4%B8%8E%E6%87%92%E7%8C%AB%E5%BE%AE%E6%9C%8D%E5%85%B1%E5%AD%98%E9%85%8D%E7%BD%AE/image%203.png)

4. **绕过路由设置**
   - 返回上一级，选择 **绕过路由**
   - 添加以下地址：

![image.png](IOS%20loon%E4%B8%8E%E6%87%92%E7%8C%AB%E5%BE%AE%E6%9C%8D%E5%85%B1%E5%AD%98%E9%85%8D%E7%BD%AE/image%204.png)

5. **懒猫微服设置**
- 保存 Loon 配置后，在懒猫微服中的网络模式中，将 **VPN** 切换为 **Proxy**

![image.png](IOS%20loon%E4%B8%8E%E6%87%92%E7%8C%AB%E5%BE%AE%E6%9C%8D%E5%85%B1%E5%AD%98%E9%85%8D%E7%BD%AE/image%205.png)

6. **重启手机客户端即可直连**
