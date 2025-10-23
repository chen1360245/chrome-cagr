import subprocess
import sys

# Kill all node processes
try:
    result = subprocess.run('tasklist | findstr "node.exe"', shell=True, capture_output=True, text=True)
    if result.stdout:
        subprocess.run('taskkill /F /IM node.exe', shell=True, capture_output=True)
        print('Killed all node.exe processes')
    else:
        print('No node.exe processes running')
except Exception as e:
    print(f'Error: {e}')

# Kill processes on ports 3000-3002
ports = [3000, 3001, 3002]
for port in ports:
    try:
        result = subprocess.run(
            f'netstat -ano | findstr :{port} | findstr LISTENING',
            shell=True,
            capture_output=True,
            text=True
        )
        if result.stdout:
            for line in result.stdout.strip().split('\n'):
                parts = line.split()
                if len(parts) >= 5:
                    pid = parts[-1]
                    subprocess.run(f'taskkill /F /PID {pid}', shell=True, capture_output=True)
                    print(f'Killed PID {pid} on port {port}')
    except:
        pass

print('All ports cleared')
