CALL mvn clean verify
CALL rmdir /S /Q storage
CALL mvn -P cargo.run -Drepo.path=storage