// Define main function (script entry)
function main(config) {

    const rule = 'DOMAIN-SUFFIX,heiyu.space,DIRECT';
    const rule_ip = 'IP-CIDR,fc03:1136:3800::/40,DIRECT';
    const rule_processname1 = 'PROCESS-NAME-REGEX,.*lzc-core.*,DIRECT';
    const rule_processname2 = 'PROCESS-NAME-REGEX,.*懒猫微服.*,DIRECT';
    const rule_apk = 'PROCESS-NAME,cloud.lazycat.client,DIRECT';
    const rule_cloud = 'DOMAIN-SUFFIX,lazycat.cloud,DIRECT';
    const rule_lcms = 'DOMAIN-SUFFIX,lazycatmicroserver.com,DIRECT';

    // 确保 rules 存在
    if (Array.isArray(config.rules)) {
        config.rules.unshift(rule);
        config.rules.unshift(rule_cloud);
        config.rules.unshift(rule_ip);
        config.rules.unshift(rule_processname1);
        config.rules.unshift(rule_processname2);
        config.rules.unshift(rule_apk);
        config.rules.unshift(rule_lcms);
        config.rules.unshift('IP-CIDR,6.6.6.6/32,DIRECT');
        config.rules.unshift('IP-CIDR,2000::6666/128,DIRECT');
    } else {
        config.rules = [
            'IP-CIDR,2000::6666/128,DIRECT',
            'IP-CIDR,6.6.6.6/32,DIRECT',
            rule,
            rule_cloud,
            rule_ip,
            rule_processname1,
            rule_processname2,
            rule_apk,
            rule_lcms
        ];
    }

    // 确保 DNS 配置存在
    if (!config.dns) config.dns = {};
    if (!config.dns['fake-ip-filter']) config.dns['fake-ip-filter'] = [];
    if (!Array.isArray(config.dns['fake-ip-filter'])) config.dns['fake-ip-filter'] = [];

    // heiyu.space 不使用 fake-ip
    config.dns['fake-ip-filter'].push('+.heiyu.space');
    config.dns['fake-ip-filter'].push('+.lazycat.cloud');

    // 确保 `tun` 存在
    if (!config["tun"]) {
        config["tun"] = [];
    }
    if (!config.tun['route-exclude-address']) config.tun['route-exclude-address'] = [];
    //6.6.6.6/32 不走 TUN
    config.tun['route-exclude-address'].push('6.6.6.6/32');
    //2000::6666/128 不走 TUN
    config.tun['route-exclude-address'].push('2000::6666/128');
    //183.136.206.164 不走 TUN
    config.tun['route-exclude-address'].push('183.136.206.164/32');

    return config;
}
