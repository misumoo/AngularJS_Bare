<?php
/**
 * Created by PhpStorm.
 * User: Misumoo
 * Date: 5/7/2015
 * Time: 12:11 PM
 */

session_start();

require 'class.Database.php';
require 'class.Email.php';

$cancelProcess = false;

//our json data
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$task = $request->task;

/*
 *
 * Task list
 *
 */

if($task == "hello") {
  $data = array(
    'test' => "callback",
    'test2' => "callback2",
    'success' => true
  );

  echo json_encode($data);
} //task hello

if($task == "hello2") {

  $data = array(
    'test' => "view2 callback",
    'test2' => "view2 callback2",
    'success' => true
  );

  echo json_encode($data);
} //task hello2

/*
 *
 * End Task list
 *
 */

?>
