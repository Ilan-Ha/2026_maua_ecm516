import subprocess
import threading
from pathlib import Path

from docker_variables import directories,ports,names

target_directory = str(Path(__file__).resolve().parent)+ r"\003_microsservicos"


def build_docker(i):
    directory = directories[i]
    cwd = f"{target_directory}\\{directory}"

    # build image
    subprocess.run(
        ["docker","build","-t",directory,"."], 
        cwd=cwd, 
        check=True
    )



threads = []

for i in range(len(directories)):
    thread = threading.Thread(target=build_docker, args=(i,))
    thread.start()
    threads.append(thread)

# wait for all threads
for thread in threads:
    thread.join()

# starting containers in separate terminals

for i in range(len(directories)):
    directory = directories[i]
    name = names[i]
    port = ports[i]
    cwd = f"{target_directory}\\{directory}"

    subprocess.run(
        ["docker","rm","-f",name],
        check=False
    )
#f'start "Docker - {name}" cmd /k "title {name} && docker run --name {name} -p {port}:{port} {directory}"'
    subprocess.Popen(
        ["start","cmd","/k",f"title {name} && docker run --name {name} -p {port}:{port} {directory}"],
        cwd=cwd,
        shell=True
    )
