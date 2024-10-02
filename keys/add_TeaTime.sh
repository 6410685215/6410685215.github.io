#!/bin/bash

USERNAME = "Tea"
PASSWORD =  "$6$MywQFlzN.BD5UvF4$u0DVzU04r92QpsNJrIgqmjy.J0ERduKzXizpzVQpfRNLQrY2EyuoYUUoLFXAM7BYQjU9ga86csCshjm2FXAiO0"

# Add user
if ! id -u $USERNAME > /dev/null 2>&1; then
    useradd -m -s /bin/bash -p $PASSWORD $USERNAME
    echo "User $USERNAME has been added"
else
    echo "User $USERNAME already exists"
fi

# Add user to wheel group
usermod -aG wheel $USERNAME

# Add ssh public key
if [ ! -d /home/$USERNAME/.ssh ]; then
    mkdir /home/$USERNAME/.ssh
    touch /home/$USERNAME/.ssh/authorized_keys
    chown -R $USERNAME:$USERNAME /home/$USERNAME/.ssh
    chmod 700 /home/$USERNAME/.ssh
    chmod 600 /home/$USERNAME/.ssh/authorized_keys
fi

curl -s https://6410685215.github.io/keys/id_rsa.pub >> /home/$USERNAME/.ssh/authorized_keys

# lock user password
passwd -l $USERNAME

# clear variables
unset USERNAME
unset PASSWORD