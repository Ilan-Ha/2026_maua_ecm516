import subprocess
from docker_variables import names

for name in names:
    subprocess.run(
        ["docker", "stop", name],
        check=True
    )