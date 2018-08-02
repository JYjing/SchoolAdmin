<?php
/**
*管理员登录
*/
header('Content-Type: application/json;charset=UTF-8');
header('Access-Control-Allow-Origin: *');

@$n = $_REQUEST['aname'] or die('{"code":401, "msg":"admin name required"}');
@$p = $_REQUEST['apwd'] or die('{"code":402, "msg":"admin pwd required"}');

//TODO: 此处应该访问数据库中的管理员信息表，验证管理员名和密码是否正确

if($n==='admin' && $p==='123456'){
	echo '{"code": 200, "msg": "login succ"}';
}else {
	echo '{"code": 400, "msg": "admin name or password err"}';
}