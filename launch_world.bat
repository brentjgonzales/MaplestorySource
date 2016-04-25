@echo off
@title World Server
set CLASSPATH=.;nbdist\LeaderMS.jar;nbdist\lib\mina-core.jar;nbdist\lib\slf4j-api.jar;nbdist\lib\slf4j-jdk14.jar;nbdist\lib\mysql-connector-java-bin.jar
java -Xmx600m -Drecvops=recvops.properties -Dsendops=sendops.properties -Dwzpath=wz\ -Djavax.net.ssl.keyStore=filename.keystore -Djavax.net.ssl.keyStorePassword=passwd -Djavax.net.ssl.trustStore=filename.keystore -Djavax.net.ssl.trustStorePassword=passwd handling.world.WorldServer
pause
