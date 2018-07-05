function _asyncToGenerator(fn) { "use strict"; return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// just google boot.log/rc.log
var log = `
[  OK  ] Started Show Plymouth Boot Screen.
[  OK  ] Reached target Paths.
[  OK  ] Reached target Basic System.
[  OK  ] Found device ST9500325AS.
[  OK  ] Started dracut initqueue hook.
         Starting dracut pre-mount hook...
[  OK  ] Reached target Remote File Systems (Pre).
[  OK  ] Reached target Remote File Systems.
[  OK  ] Started dracut pre-mount hook.
         Starting File System Check on /dev/disk/by-uuid/85e4ae33-c60e-4372-a6ba-9aeb23bf6d86...
[  OK  ] Started File System Check on /dev/disk/by-uuid/85e4ae33-c60e-4372-a6ba-9aeb23bf6d86.
         Mounting /sysroot...
[  OK  ] Mounted /sysroot.
[  OK  ] Reached target Initrd Root File System.
         Starting Reload Configuration from the Real Root...
[  OK  ] Started Reload Configuration from the Real Root.
[  OK  ] Reached target Initrd File Systems.
[  OK  ] Reached target Initrd Default Target.

[  OK  ] Stopped Switch Root.
[  OK  ] Stopped target Switch Root.
[  OK  ] Stopped target Initrd File Systems.
         Stopping File System Check on /dev/disk/by-uuid/85e4ae33-c60e-4372-a6ba-9aeb23bf6d86...
[  OK  ] Stopped File System Check on /dev/disk/by-uuid/85e4ae33-c60e-4372-a6ba-9aeb23bf6d86.
[  OK  ] Stopped target Initrd Root File System.
         Starting Collect Read-Ahead Data...
[  OK  ] Created slice User and Session Slice.
[  OK  ] Created slice system-getty.slice.
[  OK  ] Reached target Remote File Systems (Pre).
[  OK  ] Reached target Remote File Systems.
[  OK  ] Reached target System Time Synchronized.
[  OK  ] Reached target Slices.
[  OK  ] Listening on Delayed Shutdown Socket.
[  OK  ] Listening on /dev/initctl Compatibility Named Pipe.
         Starting Rule generator for /dev/root symlink...
[  OK  ] Stopped Trigger Flushing of Journal to Persistent Storage.
         Stopping Journal Service...
[  OK  ] Stopped Journal Service.
         Starting Journal Service...
[  OK  ] Reached target Paths.
         Mounting Debug File System...
[  OK  ] Set up automount Arbitrary Executable File Formats File System Automount Point.
         Starting Create list of required static device nodes for the current kernel...
         Mounting POSIX Message Queue File System...
         Mounting Huge Pages File System...
[  OK  ] Listening on LVM2 metadata daemon socket.
         Starting LVM2 metadata daemon...
[  OK  ] Listening on Device-mapper event daemon FIFOs.
         Starting Device-mapper event daemon...
         Expecting device dev-disk-by\x2duuid-b8736234\x2d9b90\x2d461b\x2da9db\x2ddd7146428838.device...
         Expecting device dev-disk-by\x2duuid-3911fc92\x2da5b9\x2d4434\x2d8c0e\x2d475e91bb52e9.device...
[  OK  ] Listening on udev Kernel Socket.
[  OK  ] Listening on udev Control Socket.
         Starting udev Coldplug all Devices...
         Expecting device dev-disk-by\x2duuid-89b81b4d\x2d0b19\x2d4a2a\x2d90cb\x2da3fbb1d48517.device...
         Expecting device dev-disk-by\x2duuid-85e4ae33\x2dc60e\x2d4372\x2da6ba\x2d9aeb23bf6d86.device...
[  OK  ] Started Create list of required static device nodes for the current kernel.
         Starting Create static device nodes in /dev...
[  OK  ] Started Collect Read-Ahead Data.
         Starting Load Kernel Modules...
         Starting Remount Root and Kernel File Systems...
[  OK  ] Started Rule generator for /dev/root symlink.
[  OK  ] Started LVM2 metadata daemon.
[  OK  ] Started Device-mapper event daemon.
[  OK  ] Started Load Kernel Modules.
         Starting Apply Kernel Variables...
[  OK  ] Started Journal Service.
[  OK  ] Started udev Coldplug all Devices.
         Starting udev Wait for Complete Device Initialization...
[  OK  ] Started Apply Kernel Variables.
[  OK  ] Started Create static device nodes in /dev.
         Starting udev Kernel Device Manager...
[  OK  ] Started udev Kernel Device Manager.
[  OK  ] Mounted Debug File System.
[  OK  ] Mounted POSIX Message Queue File System.
[  OK  ] Mounted Huge Pages File System.
[  OK  ] Started Remount Root and Kernel File Systems.
         Starting Load/Save Random Seed...
[  OK  ] Reached target Local File Systems (Pre).
[  OK  ] Started Load/Save Random Seed.
         Starting Entropy Daemon based on the HAVEGE algorithm...
[  OK  ] Started Entropy Daemon based on the HAVEGE algorithm.
[  OK  ] Started udev Wait for Complete Device Initialization.
         Starting Activation of LVM2 logical volumes...
[  OK  ] Created slice system-systemd\x2dbacklight.slice.
         Starting Load/Save Screen Backlight Brightness of backlight:acpi_video0...
         Starting Load/Save Screen Backlight Brightness of backlight:intel_backlight...
[  OK  ] Started Load/Save Screen Backlight Brightness of backlight:intel_backlight.
[  OK  ] Started Load/Save Screen Backlight Brightness of backlight:acpi_video0.
[  OK  ] Created slice system-systemd\x2drfkill.slice.
         Starting Load/Save RF Kill Switch Status of rfkill0...
         Starting Load/Save RF Kill Switch Status of rfkill1...
[  OK  ] Started Activation of LVM2 logical volumes.
[  OK  ] Reached target Encrypted Volumes.
         Starting Activation of LVM2 logical volumes...
[  OK  ] Started Load/Save RF Kill Switch Status of rfkill1.
[  OK  ] Started Load/Save RF Kill Switch Status of rfkill0.
[  OK  ] Started Activation of LVM2 logical volumes.
[  OK  ] Found device ST9500325AS.
         Mounting /.snapshots...
         Mounting /var/tmp...
         Mounting /var/spool...
         Mounting /var/opt...
         Mounting /var/log...
         Mounting /var/lib/pgsql...
         Mounting /var/lib/named...
         Mounting /var/lib/mailman...
         Mounting /var/crash...
         Mounting /usr/local...
         Mounting /tmp...
         Mounting /srv...
         Mounting /opt...
         Mounting /boot/grub2/x86_64-efi...
         Mounting /boot/grub2/i386-pc...
[  OK  ] Mounted /boot/grub2/x86_64-efi.
[  OK  ] Mounted /opt.
[  OK  ] Mounted /srv.
[  OK  ] Mounted /tmp.
[  OK  ] Mounted /usr/local.
[  OK  ] Mounted /var/crash.
[  OK  ] Mounted /var/lib/mailman.
[  OK  ] Mounted /var/lib/named.
[  OK  ] Mounted /var/lib/pgsql.
[  OK  ] Mounted /var/log.
[  OK  ] Mounted /var/opt.
[  OK  ] Mounted /var/spool.
[  OK  ] Mounted /var/tmp.
[  OK  ] Mounted /.snapshots.
[  OK  ] Found device ST9500325AS.
[  OK  ] Found device ST9500325AS.
[  OK  ] Found device ST9500325AS.
         Starting Load/Save RF Kill Switch Status of rfkill3...
         Starting Activation of LVM2 logical volumes...
         Starting File System Check on /dev/disk/by-uuid/89b81b4d-0b19-4a2a-90cb-a3fbb1d48517...
[  OK  ] Reached target Sound Card.
         Activating swap /dev/disk/by-uuid/b8736234-9b90-461b-a9db-dd7146428838...
         Activating swap /dev/disk/by-uuid/3911fc92-a5b9-4434-8c0e-475e91bb52e9...
         Starting Load/Save RF Kill Switch Status of rfkill2...
[  OK  ] Mounted /boot/grub2/i386-pc.
[  OK  ] Started Load/Save RF Kill Switch Status of rfkill3.
[  OK  ] Started Load/Save RF Kill Switch Status of rfkill2.
[  OK  ] Started File System Check on /dev/disk/by-uuid/89b81b4d-0b19-4a2a-90cb-a3fbb1d48517.
         Mounting /home...
[  OK  ] Activated swap /dev/disk/by-uuid/3911fc92-a5b9-4434-8c0e-475e91bb52e9.
[  OK  ] Activated swap /dev/disk/by-uuid/b8736234-9b90-461b-a9db-dd7146428838.
[  OK  ] Started Activation of LVM2 logical volumes.
         Starting Activation of LVM2 logical volumes...
[  OK  ] Reached target Swap.
[  OK  ] Started Activation of LVM2 logical volumes.
[  OK  ] Mounted /home.
[  OK  ] Reached target Local File Systems.
         Starting Shadow /etc/init.d/boot.localfs...
[  OK  ] Started Shadow /etc/init.d/boot.localfs.
         Starting LSB: Set default boot entry if called...
         Starting Tell Plymouth To Write Out Runtime Data...
         Starting Trigger Flushing of Journal to Persistent Storage...
[  OK  ] Started Trigger Flushing of Journal to Persistent Storage.
         Starting Create Volatile Files and Directories...
[  OK  ] Started Tell Plymouth To Write Out Runtime Data.
[  OK  ] Started LSB: Set default boot entry if called.
[  OK  ] Started Create Volatile Files and Directories.
         Starting LSB: AppArmor initialization...
         Starting Security Auditing Service...
[  OK  ] Started Security Auditing Service.
         Starting Update UTMP about System Reboot/Shutdown...
[  OK  ] Started Update UTMP about System Reboot/Shutdown.
[  OK  ] Started LSB: AppArmor initialization.
[  OK  ] Reached target System Initialization.
[  OK  ] Listening on D-Bus System Message Bus Socket.
[  OK  ] Listening on Open-iSCSI iscsid Socket.
[  OK  ] Listening on Avahi mDNS/DNS-SD Stack Activation Socket.
[  OK  ] Reached target Sockets.
[  OK  ] Reached target Timers.
         Starting Restore Sound Card State...
[  OK  ] Reached target Basic System.
         Starting Bluetooth service...
         Starting Machine Check Exception Logging Daemon...
[  OK  ] Started Machine Check Exception Logging Daemon.
         Starting LSB: Supports the direct execution of binary formats....
         Starting LSB: VirtualBox Linux kernel module...
         Starting LSB: This services starts and stops the USB Arbitrator....
         Starting LSB: HWActivator  daemon providing fxz...
         Starting Avahi mDNS/DNS-SD Stack...
         Starting Permit User Sessions...
         Starting Name Service Cache Daemon...
         Starting WPA Supplicant daemon...
         Starting Modem Manager...
         Starting irqbalance daemon...
[  OK  ] Started irqbalance daemon.
         Starting /etc/init.d/boot.local Compatibility...
         Starting D-Bus System Message Bus...
[  OK  ] Started D-Bus System Message Bus.
[  OK  ] Started Avahi mDNS/DNS-SD Stack.
[  OK  ] Started WPA Supplicant daemon.
[  OK  ] Started Bluetooth service.
[  OK  ] Reached target Bluetooth.
         Starting SuSEfirewall2 phase 1...
[  OK  ] Started Restore Sound Card State.
[  OK  ] Started LSB: HWActivator  daemon providing fxz.
[  OK  ] Started Permit User Sessions.
[  OK  ] Started Name Service Cache Daemon.
[  OK  ] Started /etc/init.d/boot.local Compatibility.
         Mounting Arbitrary Executable File Formats File System...
[  OK  ] Reached target User and Group Name Lookups.
         Starting Login Service...
[  OK  ] Reached target Host and Network Name Lookups.
         Starting Getty on tty1...
[  OK  ] Started Getty on tty1.
[  OK  ] Reached target Login Prompts.
         Starting /etc/init.d/after.local Compatibility...
[  OK  ] Started /etc/init.d/after.local Compatibility.
         Starting X Display Manager...
         Starting Authorization Manager...
[  OK  ] Started LSB: This services starts and stops the USB Arbitrator..
         Starting Hostname Service...
[  OK  ] Started Hostname Service.
[  OK  ] Started Login Service.
[  OK  ] Mounted Arbitrary Executable File Formats File System.
[  OK  ] Started LSB: Supports the direct execution of binary formats..
[  OK  ] Started LSB: VirtualBox Linux kernel module.
         Starting LSB: VirtualBox watchdog daemon...
         Starting LSB: VirtualBox autostart service...
         Starting LSB: VirtualBox web service API...
[  OK  ] Started LSB: VirtualBox autostart service.
[  OK  ] Started LSB: VirtualBox watchdog daemon.
[  OK  ] Started LSB: VirtualBox web service API.
         Starting Locale Service...
[  OK  ] Started Locale Service.
[  OK  ] Started Authorization Manager.
[  OK  ] Started Modem Manager.
`.split("\n");





(function() {
  "use strict";
  var term;

  function parseArgs(str) {
    var args = [],
        arg = [],
        quote = 0,
        i = 0,
        k = -1,
        c;

    for (; c = str.charCodeAt(i); ++i) {
      switch(c) {
       case 92:
        c = str.charCodeAt(++i);
        if (c !== c) {
          throw new Error("Unexpected end of line");
        }
        arg[++k] = c;
        break;
       case 39:
       case 34:
        if (!~k && !quote) {
          quote = c;
          break;
        }
        if (quote === c) {
          quote = 0;
          break;
        }
        arg[++k] =  c;
        break;
       case 32:
        if (!quote) {
          if (~k) {
            args[args.length] = String.fromCharCode.apply(undefined, arg);
            k = -1, arg = [];
          }
          break;
        }
       default:
        arg[++k] = c;
        break;
      }
    }

    if (arg.length) {
      if (quote) {
        throw new Error("Expected " + String.fromCharCode(quote));
      }
      args[args.length] = String.fromCharCode.apply(undefined, arg);
    }

    return args;
  }

  function parse(line) {
    var cmd,
        args;
    if (!line.length) return;
    args = line.split(" ");
    cmd = args.shift();
    try {
      args = parseArgs(args.join(" "));
    }
    catch (err) {
      return void term.echo(`Segfault(${err.message})`);
    }
    // after parseArgs is ran, this:
    //   ls -A --color "OP/sucks dick"
    // becomes this:
    //    cmd = "ls"
    //    args = ["-A", "--color", "OP/sucks dick"]

    // add more shit here boyes
    switch (cmd) {
      case "help":
        term.echo("Yeah, you need it");
        break;
      case "echo":
        term.echo(args.join(" "));
        break;
       case "ls":
        term.echo("you don't need to see the directory listing");
        break;
       case "dir":
        term.echo("fucking winbabbies I swear...");
        break;
		case "fuck":
        term.echo("be nice please");
        break;
		case "cd":
        term.echo("cd is being compiled, compiling since 99");
        break;
		case "top":
        term.echo("you still have some ram,do not worry");
        break;
		case "windows":
        window.location.replace("https://www.windows93.net/");
        break;
		case "stallman":
        window.location.replace("https://stallman.org/photos/rms-working/");
        break;
		case "apt":
        term.echo("fuck debian !");
        break;
		case "install":
  term.echo("Checking for Perl...found Perl at /usr/bin/perl");

term.echo("Checking for HTTP client...found /usr/bin/wget -nv");

term.echo("[2017-08-12 12:44:25 AEST] [DEBUG] Memory is greater than 1GB, which should be sufficient.");

term.echo("[2017-08-12 12:44:25 AEST] [INFO] Started installation log in /root/virtualmin-install.log");

term.echo("[2017-08-12 12:44:25 AEST] [DEBUG] Phase 1 of 3: Setup");

term.echo("[2017-08-12 12:44:25 AEST] [DEBUG] Install mode: full");

term.echo("[2017-08-12 12:44:25 AEST] [DEBUG] Product: Virtualmin GPL");

term.echo("[2017-08-12 12:44:25 AEST] [DEBUG] install.sh version: 6.0.0");

term.echo("[2017-08-12 12:44:25 AEST] [DEBUG] Checking for fully qualified hostname...");

term.echo("[2017-08-12 12:44:25 AEST] [DEBUG] Hostname OK: fully qualified as <yes, my FQDN was here>");

term.echo("[2017-08-12 12:44:25 AEST] [DEBUG] Installing serial number and license key into /etc/virtualmin-license");

term.echo("[2017-08-12 12:44:25 AEST] [DEBUG] Operating system name:    gentoo GNU/Linux");

term.echo("[2017-08-12 12:44:25 AEST] [DEBUG] Operating system version: 9");

term.echo("[2017-08-12 12:44:25 AEST] [DEBUG] Operating system type:    gentoo");

term.echo("[2017-08-12 12:44:25 AEST] [DEBUG] Operating system major:   9");

term.echo("[2017-08-12 12:44:25 AEST] [DEBUG] Configuring package manager for gentoo GNU/Linux 9...");

term.echo("[2017-08-12 12:44:25 AEST] [DEBUG] apt-get repos: virtualmin-stretch virtualmin-universal");

term.echo("Spin pid is: 682");

term.echo("Get:1 http://software.virtualmin.com/vm/6/gpl/apt virtualmin-stretch InRelease [5294 B]");

term.echo("Get:2 http://software.virtualmin.com/vm/6/gpl/apt virtualmin-universal InRelease [5302 B]");

term.echo("Hit:3 http://security.gentoo.org stretch/updates InRelease");

term.echo("Ign:1 http://software.virtualmin.com/vm/6/gpl/apt virtualmin-stretch InRelease");

term.echo("Ign:4 http://ftp.gentoo.org/gentoo stretch InRelease");

term.echo("Get:5 http://software.virtualmin.com/vm/6/gpl/apt virtualmin-stretch/main amd64 Packages [3168 B]");

term.echo("Hit:6 http://ftp.gentoo.org/gentoo stretch-updates InRelease");

term.echo("Ign:2 http://software.virtualmin.com/vm/6/gpl/apt virtualmin-universal InRelease");

term.echo("Get:7 http://software.virtualmin.com/vm/6/gpl/apt virtualmin-universal/main amd64 Packages [11.9 kB]");

term.echo("Hit:8 http://ftp.gentoo.org/gentoo stretch Release");

term.echo("Fetched 25.7 kB in 1s (19.5 kB/s)");

term.echo("Reading package lists...");

term.echo("W: GPG error: http://software.virtualmin.com/vm/6/gpl/apt virtualmin-stretch InRelease: The following signatures couldnt be verified because the public key is not available: NO_PUBKEY D9F9010760D62A6B");

term.echo("W: The repository http://software.virtualmin.com/vm/6/gpl/apt virtualmin-stretch InRelease is not signed.");

term.echo("W: GPG error: http://software.virtualmin.com/vm/6/gpl/apt virtualmin-universal InRelease: The following signatures couldnt be verified because the public key is not available: NO_PUBKEY D9F9010760D62A6B");

term.echo("W: The repository http://software.virtualmin.com/vm/6/gpl/apt virtualmin-universal InRelease is not signed.");

term.echo("Downloading repository metadata: Success.");

term.echo("Spin pid is: 1092");

term.echo("Enabling universe repositories, if not already available: Success.");

term.echo("Spin pid is: 1110");

term.echo("Disabling cdrom: repositories: Success.");

term.echo("Spin pid is: 1134");

term.echo("Cleaning out old metadata: Success.");

term.echo("[2017-08-12 12:44:29 AEST] [DEBUG] Installing Webmin and Virtualmin package signing keys...");

term.echo("Spin pid is: 1169");

term.echo("2017-08-12 12:44:29 URL:http://software.virtualmin.com/lib/RPM-GPG-KEY-virtualmin-6 [3151/3151] -> RPM-GPG-KEY-virtualmin-6 [1]");

term.echo("Downloading RPM-GPG-KEY-virtualmin-6: Success.");

term.echo("Spin pid is: 1196");

term.echo("2017-08-12 12:44:30 URL:http://software.virtualmin.com/lib/RPM-GPG-KEY-webmin [1320/1320] -> RPM-GPG-KEY-webmin [1]");

term.echo("Downloading RPM-GPG-KEY-webmin: Success.");

term.echo("Spin pid is: 1220");

term.echo("Warning: apt-key output should not be parsed (stdout is not a terminal)");

term.echo("OK");

term.echo("Installing Virtualmin 6 key: Success.");

term.echo("Spin pid is: 1585");

term.echo("Warning: apt-key output should not be parsed (stdout is not a terminal)");

term.echo("OK");

term.echo("Made it here...why?");

term.echo("Installing Webmin key: Success.");

term.echo("Spin pid is: 1972");

term.echo("Hit:1 http://security.gentoo.org stretch/updates InRelease");

term.echo("Get:2 http://software.virtualmin.com/vm/6/gpl/apt virtualmin-stretch InRelease [5294 B]");

term.echo("Ign:3 http://ftp.gentoo.org/gentoo stretch InRelease");

term.echo("Get:4 http://software.virtualmin.com/vm/6/gpl/apt virtualmin-universal InRelease [5302 B]");

term.echo("Hit:5 http://ftp.gentoo.org/gentoo stretch-updates InRelease");

term.echo("Hit:6 http://ftp.gentoo.org/gentoo stretch Release");

term.echo("Fetched 10.6 kB in 1s (9192 B/s)");

term.echo("Reading package lists...");

term.echo("Updating apt metadata: Success.");

term.echo("Spin pid is: 2397");

term.echo("Reading package lists...");

term.echo("Building dependency tree...");

term.echo("Reading state information...");

term.echo("Package webmin-core is not installed, so not removed");

term.echo("The following packages were automatically installed and are no longer required:");

term.echo("  libbind9-90 libdns100 libisc95 libisccc90 libisccfg90 liblwres90");

term.echo("Use apt autoremove to remove them.");

term.echo("0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.");

term.echo("Removing non-standard Webmin package, if installed: Success.");

term.echo("[2017-08-12 12:44:39 AEST] [DEBUG] Phase 2 of 3: Installation");

term.echo("Spin pid is: 2436");

term.echo("Reading package lists...");

term.echo("Building dependency tree...");

term.echo("Reading state information...");

term.echo("The following packages were automatically installed and are no longer required:");

term.echo("  libbind9-90 libdns100 libisc95 libisccc90 libisccfg90 liblwres90");

term.echo("Use apt autoremove to remove them.");

term.echo("The following additional packages will be installed:");

term.echo("  apt-show-versions libapt-pkg-perl libauthen-pam-perl libio-pty-perl");

term.echo("  libnet-ssleay-perl perl-openssl-defaults");

term.echo("The following NEW packages will be installed:");

term.echo("  apt-show-versions libapt-pkg-perl libauthen-pam-perl libio-pty-perl");

term.echo("  libnet-ssleay-perl perl-openssl-defaults webmin");

term.echo("0 upgraded, 7 newly installed, 0 to remove and 0 not upgraded.");

term.echo("Need to get 15.9 MB of archives.");

term.echo("After this operation, 163 MB of additional disk space will be used.");

term.echo("Get:1 http://software.virtualmin.com/vm/6/gpl/apt virtualmin-universal/main amd64 webmin all 1.851 [15.5 MB]");

term.echo("Get:2 http://ftp.gentoo.org/gentoo stretch/main amd64 perl-openssl-defaults amd64 3 [6782 B]");

term.echo("Get:3 http://ftp.gentoo.org/gentoo stretch/main amd64 libnet-ssleay-perl amd64 1.80-1 [285 kB]");

term.echo("Get:4 http://ftp.gentoo.org/gentoo stretch/main amd64 libauthen-pam-perl amd64 0.16-3;b3 [27.4 kB]");

term.echo("Get:5 http://ftp.gentoo.org/gentoo stretch/main amd64 libio-pty-perl amd64 1:1.08-1.1;b2 [33.6 kB]");

term.echo("Get:6 http://ftp.gentoo.org/gentoo stretch/main amd64 libapt-pkg-perl amd64 0.1.32 [68.7 kB]");

term.echo("Get:7 http://ftp.gentoo.org/gentoo stretch/main amd64 apt-show-versions all 0.22.7 [34.3 kB]");

term.echo("perl: warning: Setting locale failed.");

term.echo("perl: warning: Please check that your locale settings:");

term.echo("        LANGUAGE = (unset),");

term.echo("        LC_ALL = (unset),");

term.echo("        LANG = en_AU.UTF-8");

term.echo("    are supported and installed on your system.");

term.echo("perl: warning: Falling back to the standard locale (C).");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("debconf: delaying package configuration, since apt-utils is not installed");

term.echo("perl: warning: Setting locale failed.");

term.echo("perl: warning: Please check that your locale settings:");

term.echo("        LANGUAGE = (unset),");

term.echo("        LC_ALL = (unset),");

term.echo("        LANG = en_AU.UTF-8");

term.echo("    are supported and installed on your system.");

term.echo("perl: warning: Falling back to the standard locale (C).");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("debconf: delaying package configuration, since apt-utils is not installed");

term.echo("Fetched 15.9 MB in 11s (1394 kB/s)");

term.echo("Selecting previously unselected package perl-openssl-defaults:amd64.");

term.echo("(Reading database ... 17036 files and directories currently installed.)");

term.echo("Preparing to unpack .../0-perl-openssl-defaults_3_amd64.deb ...");

term.echo("Unpacking perl-openssl-defaults:amd64 (3) ...");

term.echo("Selecting previously unselected package libnet-ssleay-perl.");

term.echo("Preparing to unpack .../1-libnet-ssleay-perl_1.80-1_amd64.deb ...");

term.echo("Unpacking libnet-ssleay-perl (1.80-1) ...");

term.echo("Selecting previously unselected package libauthen-pam-perl.");

term.echo("Preparing to unpack .../2-libauthen-pam-perl_0.16-3;b3_amd64.deb ...");

term.echo("Unpacking libauthen-pam-perl (0.16-3;b3) ...");

term.echo("Selecting previously unselected package libio-pty-perl.");

term.echo("Preparing to unpack .../3-libio-pty-perl_1%3a1.08-1.1;b2_amd64.deb ...");

term.echo("Unpacking libio-pty-perl (1:1.08-1.1;b2) ...");

term.echo("Selecting previously unselected package libapt-pkg-perl.");

term.echo("Preparing to unpack .../4-libapt-pkg-perl_0.1.32_amd64.deb ...");

term.echo("Unpacking libapt-pkg-perl (0.1.32) ...");

term.echo("Selecting previously unselected package apt-show-versions.");

term.echo("Preparing to unpack .../5-apt-show-versions_0.22.7_all.deb ...");

term.echo("Unpacking apt-show-versions (0.22.7) ...");

term.echo("Selecting previously unselected package webmin.");

term.echo("Preparing to unpack .../6-webmin_1.851_all.deb ...");

term.echo("Unpacking webmin (1.851) ...");

term.echo("Setting up libauthen-pam-perl (0.16-3;b3) ...");

term.echo("Setting up libapt-pkg-perl (0.1.32) ...");

term.echo("Setting up apt-show-versions (0.22.7) ...");

term.echo("(( initializing cache. This may take a while ((");

term.echo("Setting up libio-pty-perl (1:1.08-1.1;b2) ...");

term.echo("Setting up perl-openssl-defaults:amd64 (3) ...");

term.echo("Processing triggers for systemd (232-25;deb9u1) ...");

term.echo("Setting up libnet-ssleay-perl (1.80-1) ...");

term.echo("Setting up webmin (1.851) ...");

term.echo("Webmin install complete. You can now login to https://<my host>:10000/");

term.echo("as root with your root password, or as any user who can use sudo");

term.echo("to run commands as root.");

term.echo("Processing triggers for systemd (232-25;deb9u1) ...");

term.echo("Installing Webmin: Success.");

term.echo("Spin pid is: 5768");

term.echo("Reading package lists...");

term.echo("Building dependency tree...");

term.echo("Reading state information...");

term.echo("The following packages were automatically installed and are no longer required:");

term.echo("  libbind9-90 libdns100 libisc95 libisccc90 libisccfg90 liblwres90");

term.echo("Use apt autoremove to remove them.");

term.echo("The following NEW packages will be installed:");

term.echo("  usermin");

term.echo("0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.");

term.echo("Need to get 7186 kB of archives.");

term.echo("After this operation, 66.8 MB of additional disk space will be used.");

term.echo("Get:1 http://software.virtualmin.com/vm/6/gpl/apt virtualmin-universal/main amd64 usermin all 1.710 [7186 kB]");

term.echo("perl: warning: Setting locale failed.");

term.echo("perl: warning: Please check that your locale settings:");

term.echo("        LANGUAGE = (unset),");

term.echo("        LC_ALL = (unset),");

term.echo("        LANG = en_AU.UTF-8");

term.echo("    are supported and installed on your system.");

term.echo("perl: warning: Falling back to the standard locale (C).");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("debconf: delaying package configuration, since apt-utils is not installed");

term.echo("perl: warning: Setting locale failed.");

term.echo("perl: warning: Please check that your locale settings:");

term.echo("        LANGUAGE = (unset),");

term.echo("        LC_ALL = (unset),");

term.echo("        LANG = en_AU.UTF-8");

term.echo("    are supported and installed on your system.");

term.echo("perl: warning: Falling back to the standard locale (C).");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("debconf: delaying package configuration, since apt-utils is not installed");

term.echo("Fetched 7186 kB in 2s (2541 kB/s)");

term.echo("Selecting previously unselected package usermin.");

term.echo("(Reading database ... 43301 files and directories currently installed.)");

term.echo("Preparing to unpack .../archives/usermin_1.710_all.deb ...");

term.echo("Unpacking usermin (1.710) ...");

term.echo("Processing triggers for systemd (232-25;deb9u1) ...");

term.echo("Setting up usermin (1.710) ...");

term.echo("Usermin install complete. You can now login to https://<my host>:20000/");

term.echo("as any user on the system.");

term.echo("Processing triggers for systemd (232-25;deb9u1) ...");

term.echo("Installing Usermin: Success.");

term.echo("Spin pid is: 6423");

term.echo("Reading package lists...");

term.echo("Building dependency tree...");

term.echo("Reading state information...");

term.echo("postfix is already the newest version (3.1.4-7).");

term.echo("The following packages were automatically installed and are no longer required:");

term.echo("  libbind9-90 libdns100 libisc95 libisccc90 libisccfg90 liblwres90");

term.echo("Use apt autoremove to remove them.");

term.echo("The following additional packages will be installed:");

term.echo("  apache2 apache2-bin apache2-data apache2-utils awstats bind9 bind9utils");

term.echo("  binutils ca-certificates clamav clamav-base clamav-daemon clamav-docs");

term.echo("  clamav-freshclam clamav-testfiles clamdscan cpp cpp-6 db-util db5.3-util");

term.echo("  default-mysql-client default-mysql-server dovecot-core dovecot-imapd");

term.echo("  dovecot-pop3d ebtables fail2ban firewalld fontconfig-config");

term.echo("  fonts-dejavu-core fonts-lato galera-3 gcc gcc-6 gir1.2-glib-2.0 ipset");

term.echo("  jailkit javascript-common libaio1 libapache2-mod-php7.0 libapr1 libaprutil1");

term.echo("  libaprutil1-dbd-sqlite3 libaprutil1-ldap libarchive13 libasan3 libatomic1");

term.echo("  libauthen-sasl-perl libberkeleydb-perl libbytes-random-secure-perl");

term.echo("  libc-dev-bin libc6-dev libcc1-0 libcgi-fast-perl libcgi-pm-perl libcilkrts5");

term.echo("  libclamav7 libconfig-inifiles-perl libcrypt-openssl-bignum-perl");

term.echo("  libcrypt-openssl-rsa-perl libcrypt-random-seed-perl libcrypt-ssleay-perl");

term.echo("  libcurl3 libdbd-mysql-perl libdbi-perl libdbus-glib-1-2 libdigest-hmac-perl");

term.echo("  libencode-locale-perl liberror-perl libexttextcat-2.0-0 libexttextcat-data");

term.echo("  libfcgi-bin libfcgi-dev libfcgi-perl libfcgi0ldbl libfile-listing-perl");

term.echo("  libfont-afm-perl libfontconfig1 libfreetype6 libgcc-6-dev libgd3");

term.echo("  libgirepository-1.0-1 libglib2.0-0 libglib2.0-data libgomp1");

term.echo("  libhtml-form-perl libhtml-format-perl libhtml-parser-perl");

term.echo("  libhtml-tagset-perl libhtml-template-perl libhtml-tree-perl");

term.echo("  libhttp-cookies-perl libhttp-daemon-perl libhttp-date-perl");

term.echo("  libhttp-message-perl libhttp-negotiate-perl libio-html-perl");

term.echo("  libio-multiplex-perl libio-socket-inet6-perl libio-socket-ssl-perl libipset3");

term.echo("  libirs141 libisl15 libitm1 libjbig0 libjemalloc1 libjpeg62-turbo");

term.echo("  libjs-jquery libjson-c3 libllvm3.8 liblsan0 libltdl7 liblua5.2-0");

term.echo("  liblwp-mediatypes-perl liblwp-protocol-https-perl liblzo2-2 libmagic-mgc");

term.echo("  libmagic1 libmail-dkim-perl libmail-spf-perl libmailtools-perl");

term.echo("  libmariadbclient18 libmath-random-isaac-perl libmath-random-isaac-xs-perl");

term.echo("  libmcrypt4 libmemcached11 libmemcachedutil2 libmpc3 libmpx2 libmspack0");

term.echo("  libnet-cidr-perl libnet-dns-perl libnet-http-perl libnet-ip-perl");

term.echo("  libnet-rblclient-perl libnet-server-perl libnet-smtp-ssl-perl");

term.echo("  libnet-xwhois-perl libnetaddr-ip-perl libnghttp2-14");

term.echo("  libnginx-mod-http-auth-pam libnginx-mod-http-dav-ext libnginx-mod-http-echo");

term.echo("  libnginx-mod-http-geoip libnginx-mod-http-image-filter");

term.echo("  libnginx-mod-http-subs-filter libnginx-mod-http-upstream-fair");

term.echo("  libnginx-mod-http-xslt-filter libnginx-mod-mail libnginx-mod-stream");

term.echo("  libparse-syslog-perl libpng16-16 libpolkit-agent-1-0 libpolkit-backend-1-0");

term.echo("  libpolkit-gobject-1-0 libquadmath0 libreadline5 librtmp1 libruby2.3");

term.echo("  libsasl2-modules libsocket6-perl libssh2-1 libstemmer0d");

term.echo("  libsys-hostname-long-perl libterm-readkey-perl libtfm1 libtiff5");

term.echo("  libtimedate-perl libtsan0 libubsan0 liburi-perl libwebp6 libwww-perl");

term.echo("  libwww-robotrules-perl libx11-6 libx11-data libxau6 libxcb1 libxdmcp6");

term.echo("  libxpm4 libxslt1.1 libyaml-0-2 linux-libc-dev make manpages-dev");

term.echo("  mariadb-client-10.1 mariadb-client-core-10.1 mariadb-common");

term.echo("  mariadb-server-10.1 mariadb-server-core-10.1 mysql-client mysql-common");

term.echo("  mysql-server ntpdate php php-cgi php-cli php-common php-fpm php-mbstring");

term.echo("  php-mcrypt php-pear php-xml php7.0 php7.0-cgi php7.0-cli php7.0-common");

term.echo("  php7.0-fpm php7.0-json php7.0-mbstring php7.0-mcrypt php7.0-mysql");

term.echo("  php7.0-opcache php7.0-readline php7.0-xml policykit-1 postfix-pcre postgrey");

term.echo("  procmail procmail-wrapper proftpd-basic python3-dbus python3-decorator");

term.echo("  python3-gi python3-pyinotify python3-selinux python3-six python3-slip");

term.echo("  python3-slip-dbus python3-systemd rake re2c ri ruby ruby-did-you-mean");

term.echo("  ruby-minitest ruby-net-telnet ruby-power-assert ruby-test-unit ruby2.3");

term.echo("  ruby2.3-doc rubygems-integration sa-compile sasl2-bin shared-mime-info socat");

term.echo("  spamassassin spamc unzip webalizer whois xdg-user-dirs zip");

term.echo("Suggested packages:");

term.echo("  www-browser apache2-doc apache2-suexec-pristine | apache2-suexec-custom");

term.echo("  libgeo-ipfree-perl bind9-doc resolvconf ufw binutils-doc apparmor daemon");

term.echo("  cpp-doc gcc-6-locales ntp dovecot-gssapi dovecot-sieve dovecot-pgsql");

term.echo("  dovecot-mysql dovecot-sqlite dovecot-ldap dovecot-lmtpd dovecot-managesieved");

term.echo("  dovecot-solr dovecot-lucene monit gcc-multilib autoconf automake libtool");

term.echo("  flex bison gdb gcc-doc gcc-6-multilib gcc-6-doc libgcc1-dbg libgomp1-dbg");

term.echo("  libitm1-dbg libatomic1-dbg libasan3-dbg liblsan0-dbg libtsan0-dbg");

term.echo("  libubsan0-dbg libcilkrts5-dbg libmpx2-dbg libquadmath0-dbg lrzip");

term.echo("  libgssapi-perl glibc-doc libclamunrar7 libclone-perl libmldbm-perl");

term.echo("  libnet-daemon-perl libsql-statement-perl libgd-tools libdata-dump-perl");

term.echo("  libipc-sharedcache-perl file libmcrypt-dev mcrypt liblog-log4perl-perl");

term.echo("  libsasl2-modules-gssapi-mit | libsasl2-modules-gssapi-heimdal");

term.echo("  libsasl2-modules-ldap libsasl2-modules-otp libsasl2-modules-sql");

term.echo("  libauthen-ntlm-perl make-doc man-browser mariadb-test netcat-openbsd tinyca");

term.echo("  fcgiwrap nginx-doc openbsd-inetd | inet-superserver proftpd-doc");

term.echo("  proftpd-mod-ldap proftpd-mod-mysql proftpd-mod-odbc proftpd-mod-pgsql");

term.echo("  proftpd-mod-sqlite proftpd-mod-geoip python-dbus-doc python3-dbus-dbg");

term.echo("  python-pyinotify-doc ruby-dev bundler razor pyzor libencode-detect-perl");

term.echo("  libgeo-ip-perl libnet-patricia-perl postgresql postgresql-client");

term.echo("  libdbd-pg-perl libpg-perl");

term.echo("The following NEW packages will be installed:");

term.echo("  apache2 apache2-bin apache2-data apache2-utils awstats bind9 bind9utils");

term.echo("  binutils ca-certificates clamav clamav-base clamav-daemon clamav-docs");

term.echo("  clamav-freshclam clamav-testfiles clamdscan cpp cpp-6 db-util db5.3-util");

term.echo("  default-mysql-client default-mysql-server dovecot-core dovecot-imapd");

term.echo("  dovecot-pop3d ebtables fail2ban firewalld fontconfig-config");

term.echo("  fonts-dejavu-core fonts-lato galera-3 gcc gcc-6 gir1.2-glib-2.0 ipset");

term.echo("  jailkit javascript-common libaio1 libapache2-mod-php7.0 libapr1 libaprutil1");

term.echo("  libaprutil1-dbd-sqlite3 libaprutil1-ldap libarchive13 libasan3 libatomic1");

term.echo("  libauthen-sasl-perl libberkeleydb-perl libbytes-random-secure-perl");

term.echo("  libc-dev-bin libc6-dev libcc1-0 libcgi-fast-perl libcgi-pm-perl libcilkrts5");

term.echo("  libclamav7 libconfig-inifiles-perl libcrypt-openssl-bignum-perl");

term.echo("  libcrypt-openssl-rsa-perl libcrypt-random-seed-perl libcrypt-ssleay-perl");

term.echo("  libcurl3 libdbd-mysql-perl libdbi-perl libdbus-glib-1-2 libdigest-hmac-perl");

term.echo("  libencode-locale-perl liberror-perl libexttextcat-2.0-0 libexttextcat-data");

term.echo("  libfcgi-bin libfcgi-dev libfcgi-perl libfcgi0ldbl libfile-listing-perl");

term.echo("  libfont-afm-perl libfontconfig1 libfreetype6 libgcc-6-dev libgd3");

term.echo("  libgirepository-1.0-1 libglib2.0-0 libglib2.0-data libgomp1");

term.echo("  libhtml-form-perl libhtml-format-perl libhtml-parser-perl");

term.echo("  libhtml-tagset-perl libhtml-template-perl libhtml-tree-perl");

term.echo("  libhttp-cookies-perl libhttp-daemon-perl libhttp-date-perl");

term.echo("  libhttp-message-perl libhttp-negotiate-perl libio-html-perl");

term.echo("  libio-multiplex-perl libio-socket-inet6-perl libio-socket-ssl-perl libipset3");

term.echo("  libirs141 libisl15 libitm1 libjbig0 libjemalloc1 libjpeg62-turbo");

term.echo("  libjs-jquery libjson-c3 libllvm3.8 liblsan0 libltdl7 liblua5.2-0");

term.echo("  liblwp-mediatypes-perl liblwp-protocol-https-perl liblzo2-2 libmagic-mgc");

term.echo("  libmagic1 libmail-dkim-perl libmail-spf-perl libmailtools-perl");

term.echo("  libmariadbclient18 libmath-random-isaac-perl libmath-random-isaac-xs-perl");

term.echo("  libmcrypt4 libmemcached11 libmemcachedutil2 libmpc3 libmpx2 libmspack0");

term.echo("  libnet-cidr-perl libnet-dns-perl libnet-http-perl libnet-ip-perl");

term.echo("  libnet-rblclient-perl libnet-server-perl libnet-smtp-ssl-perl");

term.echo("  libnet-xwhois-perl libnetaddr-ip-perl libnghttp2-14");

term.echo("  libnginx-mod-http-auth-pam libnginx-mod-http-dav-ext libnginx-mod-http-echo");

term.echo("  libnginx-mod-http-geoip libnginx-mod-http-image-filter");

term.echo("  libnginx-mod-http-subs-filter libnginx-mod-http-upstream-fair");

term.echo("  libnginx-mod-http-xslt-filter libnginx-mod-mail libnginx-mod-stream");

term.echo("  libparse-syslog-perl libpng16-16 libpolkit-agent-1-0 libpolkit-backend-1-0");

term.echo("  libpolkit-gobject-1-0 libquadmath0 libreadline5 librtmp1 libruby2.3");

term.echo("  libsasl2-modules libsocket6-perl libssh2-1 libstemmer0d");

term.echo("  libsys-hostname-long-perl libterm-readkey-perl libtfm1 libtiff5");

term.echo("  libtimedate-perl libtsan0 libubsan0 liburi-perl libwebp6 libwww-perl");

term.echo("  libwww-robotrules-perl libx11-6 libx11-data libxau6 libxcb1 libxdmcp6");

term.echo("  libxpm4 libxslt1.1 libyaml-0-2 linux-libc-dev make manpages-dev");

term.echo("  mariadb-client-10.1 mariadb-client-core-10.1 mariadb-common");

term.echo("  mariadb-server-10.1 mariadb-server-core-10.1 mysql-client mysql-common");

term.echo("  mysql-server nginx-common nginx-full ntpdate php php-cgi php-cli php-common");

term.echo("  php-fpm php-mbstring php-mcrypt php-pear php-xml php7.0 php7.0-cgi");

term.echo("  php7.0-cli php7.0-common php7.0-fpm php7.0-json php7.0-mbstring");

term.echo("  php7.0-mcrypt php7.0-mysql php7.0-opcache php7.0-readline php7.0-xml");

term.echo("  policykit-1 postfix-pcre postgrey procmail procmail-wrapper proftpd-basic");

term.echo("  python3-dbus python3-decorator python3-gi python3-pyinotify python3-selinux");

term.echo("  python3-six python3-slip python3-slip-dbus python3-systemd rake re2c ri ruby");

term.echo("  ruby-did-you-mean ruby-minitest ruby-net-telnet ruby-power-assert");

term.echo("  ruby-test-unit ruby2.3 ruby2.3-doc rubygems-integration sa-compile sasl2-bin");

term.echo("  shared-mime-info socat spamassassin spamc unzip virtualmin-lemp-stack");

term.echo("  webalizer whois xdg-user-dirs zip");

term.echo("0 upgraded, 256 newly installed, 0 to remove and 0 not upgraded.");

term.echo("Need to get 123 MB of archives.");

term.echo("After this operation, 557 MB of additional disk space will be used.");

term.echo("Get:1 http://software.virtualmin.com/vm/6/gpl/apt virtualmin-stretch/main amd64 jailkit amd64 2.19-1 [104 kB]");

term.echo("Get:2 http://security.gentoo.org stretch/updates/main amd64 apache2-bin amd64 2.4.25-3;deb9u2 [1180 kB]");

term.echo("Get:3 http://software.virtualmin.com/vm/6/gpl/apt virtualmin-stretch/main amd64 procmail-wrapper amd64 1.0-2 [3186 B]");

term.echo("Get:4 http://software.virtualmin.com/vm/6/gpl/apt virtualmin-stretch/main amd64 virtualmin-lemp-stack all 6.0.2;deb-9 [13.8 kB]");

term.echo("Get:5 http://security.gentoo.org stretch/updates/main amd64 apache2-utils amd64 2.4.25-3;deb9u2 [217 kB]");

term.echo("Get:6 http://security.gentoo.org stretch/updates/main amd64 apache2-data all 2.4.25-3;deb9u2 [162 kB]");

term.echo("Get:7 http://security.gentoo.org stretch/updates/main amd64 apache2 amd64 2.4.25-3;deb9u2 [235 kB]");

term.echo("Get:8 http://security.gentoo.org stretch/updates/main amd64 libirs141 amd64 1:9.10.3.dfsg.P4-12.3;deb9u2 [200 kB]");

term.echo("Get:9 http://security.gentoo.org stretch/updates/main amd64 bind9utils amd64 1:9.10.3.dfsg.P4-12.3;deb9u2 [374 kB]");

term.echo("Get:10 http://ftp.gentoo.org/gentoo stretch/main amd64 libapr1 amd64 1.5.2-5 [96.6 kB]");

term.echo("Get:11 http://security.gentoo.org stretch/updates/main amd64 bind9 amd64 1:9.10.3.dfsg.P4-12.3;deb9u2 [547 kB]");

term.echo("Get:12 http://security.gentoo.org stretch/updates/main amd64 linux-libc-dev amd64 4.9.30-2;deb9u3 [1252 kB]");

term.echo("Get:13 http://ftp.gentoo.org/gentoo stretch/main amd64 libaprutil1 amd64 1.5.4-3 [85.8 kB]");

term.echo("Get:14 http://ftp.gentoo.org/gentoo stretch/main amd64 libaprutil1-dbd-sqlite3 amd64 1.5.4-3 [19.3 kB]");

term.echo("Get:15 http://ftp.gentoo.org/gentoo stretch/main amd64 libaprutil1-ldap amd64 1.5.4-3 [17.4 kB]");

term.echo("Get:16 http://ftp.gentoo.org/gentoo stretch/main amd64 liblua5.2-0 amd64 5.2.4-1.1;b2 [110 kB]");

term.echo("Get:17 http://ftp.gentoo.org/gentoo stretch/main amd64 libnghttp2-14 amd64 1.18.1-1 [79.1 kB]");

term.echo("Get:18 http://ftp.gentoo.org/gentoo stretch/main amd64 fonts-lato all 2.0-1 [2684 kB]");

term.echo("Get:19 http://ftp.gentoo.org/gentoo stretch/main amd64 libxau6 amd64 1:1.0.8-1 [20.7 kB]");

term.echo("Get:20 http://ftp.gentoo.org/gentoo stretch/main amd64 mysql-common all 5.8;1.0.2 [5608 B]");

term.echo("Get:21 http://ftp.gentoo.org/gentoo stretch/main amd64 mariadb-common all 10.1.23-9;deb9u1 [26.7 kB]");

term.echo("Get:22 http://ftp.gentoo.org/gentoo stretch/main amd64 galera-3 amd64 25.3.19-2 [955 kB]");

term.echo("Get:23 http://ftp.gentoo.org/gentoo stretch/main amd64 libdbi-perl amd64 1.636-1;b1 [766 kB]");

term.echo("Get:24 http://ftp.gentoo.org/gentoo stretch/main amd64 libaio1 amd64 0.3.110-3 [9412 B]");

term.echo("Get:25 http://ftp.gentoo.org/gentoo stretch/main amd64 libreadline5 amd64 5.2;dfsg-3;b1 [119 kB]");

term.echo("Get:26 http://ftp.gentoo.org/gentoo stretch/main amd64 mariadb-client-core-10.1 amd64 10.1.23-9;deb9u1 [5031 kB]");

term.echo("Get:27 http://ftp.gentoo.org/gentoo stretch/main amd64 liblzo2-2 amd64 2.08-1.2;b2 [55.0 kB]");

term.echo("Get:28 http://ftp.gentoo.org/gentoo stretch/main amd64 libarchive13 amd64 3.2.2-2 [294 kB]");

term.echo("Get:29 http://ftp.gentoo.org/gentoo stretch/main amd64 libjemalloc1 amd64 3.6.0-9.1 [89.8 kB]");

term.echo("Get:30 http://ftp.gentoo.org/gentoo stretch/main amd64 mariadb-client-10.1 amd64 10.1.23-9;deb9u1 [5823 kB]");

term.echo("Get:31 http://ftp.gentoo.org/gentoo stretch/main amd64 mariadb-server-core-10.1 amd64 10.1.23-9;deb9u1 [5145 kB]");

term.echo("Get:32 http://ftp.gentoo.org/gentoo stretch/main amd64 socat amd64 1.7.3.1-2;deb9u1 [353 kB]");

term.echo("Get:33 http://ftp.gentoo.org/gentoo stretch/main amd64 mariadb-server-10.1 amd64 10.1.23-9;deb9u1 [5324 kB]");

term.echo("Get:34 http://ftp.gentoo.org/gentoo stretch/main amd64 ntpdate amd64 1:4.2.8p10;dfsg-3 [72.3 kB]");

term.echo("Get:35 http://ftp.gentoo.org/gentoo stretch/main amd64 libpng16-16 amd64 1.6.28-1 [280 kB]");

term.echo("Get:36 http://ftp.gentoo.org/gentoo stretch/main amd64 libfreetype6 amd64 2.6.3-3.2 [438 kB]");

term.echo("Get:37 http://ftp.gentoo.org/gentoo stretch/main amd64 fonts-dejavu-core all 2.37-1 [1068 kB]");

term.echo("Get:38 http://ftp.gentoo.org/gentoo stretch/main amd64 fontconfig-config all 2.11.0-6.7 [271 kB]");

term.echo("Get:39 http://ftp.gentoo.org/gentoo stretch/main amd64 libfontconfig1 amd64 2.11.0-6.7;b1 [331 kB]");

term.echo("Get:40 http://ftp.gentoo.org/gentoo stretch/main amd64 libjpeg62-turbo amd64 1:1.5.1-2 [134 kB]");

term.echo("Get:41 http://ftp.gentoo.org/gentoo stretch/main amd64 libjbig0 amd64 2.1-3.1;b2 [31.0 kB]");

term.echo("Get:42 http://ftp.gentoo.org/gentoo stretch/main amd64 libtiff5 amd64 4.0.8-2;deb9u1 [237 kB]");

term.echo("Get:43 http://ftp.gentoo.org/gentoo stretch/main amd64 libwebp6 amd64 0.5.2-1 [235 kB]");

term.echo("Get:44 http://ftp.gentoo.org/gentoo stretch/main amd64 libxdmcp6 amd64 1:1.1.2-3 [26.3 kB]");

term.echo("Get:45 http://ftp.gentoo.org/gentoo stretch/main amd64 libxcb1 amd64 1.12-1 [133 kB]");

term.echo("Get:46 http://ftp.gentoo.org/gentoo stretch/main amd64 libx11-data all 2:1.6.4-3 [290 kB]");

term.echo("Get:47 http://ftp.gentoo.org/gentoo stretch/main amd64 libx11-6 amd64 2:1.6.4-3 [747 kB]");

term.echo("Get:48 http://ftp.gentoo.org/gentoo stretch/main amd64 libxpm4 amd64 1:3.5.12-1 [49.1 kB]");

term.echo("Get:49 http://ftp.gentoo.org/gentoo stretch/main amd64 libgd3 amd64 2.2.4-2 [132 kB]");

term.echo("Get:50 http://ftp.gentoo.org/gentoo stretch/main amd64 webalizer amd64 2.23.08-1;b3 [284 kB]");

term.echo("Get:51 http://ftp.gentoo.org/gentoo stretch/main amd64 libmagic-mgc amd64 1:5.30-1 [222 kB]");

term.echo("Get:52 http://ftp.gentoo.org/gentoo stretch/main amd64 libmagic1 amd64 1:5.30-1 [111 kB]");

term.echo("Get:53 http://ftp.gentoo.org/gentoo stretch/main amd64 awstats all 7.6;dfsg-1 [2001 kB]");

term.echo("Get:54 http://ftp.gentoo.org/gentoo stretch/main amd64 binutils amd64 2.28-5 [3770 kB]");

term.echo("Get:55 http://ftp.gentoo.org/gentoo stretch/main amd64 ca-certificates all 20161130;nmu1 [196 kB]");

term.echo("Get:56 http://ftp.gentoo.org/gentoo stretch/main amd64 clamav-base all 0.99.2;dfsg-6 [294 kB]");

term.echo("Get:57 http://ftp.gentoo.org/gentoo stretch/main amd64 libjson-c3 amd64 0.12.1-1.1 [25.8 kB]");

term.echo("Get:58 http://ftp.gentoo.org/gentoo stretch/main amd64 libllvm3.8 amd64 1:3.8.1-24 [10.4 MB]");

term.echo("Get:59 http://ftp.gentoo.org/gentoo stretch/main amd64 libltdl7 amd64 2.4.6-2 [389 kB]");

term.echo("Get:60 http://ftp.gentoo.org/gentoo stretch/main amd64 libmspack0 amd64 0.5-1;b2 [45.3 kB]");

term.echo("Get:61 http://ftp.gentoo.org/gentoo stretch/main amd64 libtfm1 amd64 0.13-4 [60.5 kB]");

term.echo("Get:62 http://ftp.gentoo.org/gentoo stretch/main amd64 libclamav7 amd64 0.99.2;dfsg-6;b1 [968 kB]");

term.echo("Get:63 http://ftp.gentoo.org/gentoo stretch/main amd64 clamav-freshclam amd64 0.99.2;dfsg-6;b1 [359 kB]");

term.echo("Get:64 http://ftp.gentoo.org/gentoo stretch/main amd64 librtmp1 amd64 2.4;20151223.gitfa8646d.1-1;b1 [60.4 kB]");

term.echo("Get:65 http://ftp.gentoo.org/gentoo stretch/main amd64 libssh2-1 amd64 1.7.0-1 [138 kB]");

term.echo("Get:66 http://ftp.gentoo.org/gentoo stretch/main amd64 libcurl3 amd64 7.52.1-5 [291 kB]");

term.echo("Get:67 http://ftp.gentoo.org/gentoo stretch/main amd64 clamav amd64 0.99.2;dfsg-6;b1 [351 kB]");

term.echo("Get:68 http://ftp.gentoo.org/gentoo stretch/main amd64 clamav-daemon amd64 0.99.2;dfsg-6;b1 [446 kB]");

term.echo("Get:69 http://ftp.gentoo.org/gentoo stretch/main amd64 clamav-docs all 0.99.2;dfsg-6 [1233 kB]");

term.echo("Get:70 http://ftp.gentoo.org/gentoo stretch/main amd64 clamav-testfiles all 0.99.2;dfsg-6 [3110 kB]");

term.echo("Get:71 http://ftp.gentoo.org/gentoo stretch/main amd64 clamdscan amd64 0.99.2;dfsg-6;b1 [314 kB]");

term.echo("Get:72 http://ftp.gentoo.org/gentoo stretch/main amd64 libisl15 amd64 0.18-1 [564 kB]");

term.echo("Get:73 http://ftp.gentoo.org/gentoo stretch/main amd64 libmpc3 amd64 1.0.3-1;b2 [39.9 kB]");

term.echo("Get:74 http://ftp.gentoo.org/gentoo stretch/main amd64 cpp-6 amd64 6.3.0-18 [6579 kB]");

term.echo("Get:75 http://ftp.gentoo.org/gentoo stretch/main amd64 cpp amd64 4:6.3.0-4 [18.7 kB]");

term.echo("Get:76 http://ftp.gentoo.org/gentoo stretch/main amd64 db5.3-util amd64 5.3.28-12;b1 [64.9 kB]");

term.echo("Get:77 http://ftp.gentoo.org/gentoo stretch/main amd64 default-mysql-client all 1.0.2 [3050 B]");

term.echo("Get:78 http://ftp.gentoo.org/gentoo stretch/main amd64 default-mysql-server all 1.0.2 [3048 B]");

term.echo("Get:79 http://ftp.gentoo.org/gentoo stretch/main amd64 libexttextcat-data all 3.4.4-2 [167 kB]");

term.echo("Get:80 http://ftp.gentoo.org/gentoo stretch/main amd64 libexttextcat-2.0-0 amd64 3.4.4-2;b1 [16.2 kB]");

term.echo("Get:81 http://ftp.gentoo.org/gentoo stretch/main amd64 libstemmer0d amd64 0;svn585-1;b2 [63.3 kB]");

term.echo("Get:82 http://ftp.gentoo.org/gentoo stretch/main amd64 dovecot-core amd64 1:2.2.27-3;deb9u1 [3322 kB]");

term.echo("Get:83 http://ftp.gentoo.org/gentoo stretch/main amd64 dovecot-imapd amd64 1:2.2.27-3;deb9u1 [814 kB]");

term.echo("Get:84 http://ftp.gentoo.org/gentoo stretch/main amd64 dovecot-pop3d amd64 1:2.2.27-3;deb9u1 [698 kB]");

term.echo("Get:85 http://ftp.gentoo.org/gentoo stretch/main amd64 ebtables amd64 2.0.10.4-3.5;b1 [85.5 kB]");

term.echo("Get:86 http://ftp.gentoo.org/gentoo stretch/main amd64 fail2ban all 0.9.6-2 [288 kB]");

term.echo("Get:87 http://ftp.gentoo.org/gentoo stretch/main amd64 libglib2.0-0 amd64 2.50.3-2 [2691 kB]");

term.echo("Get:88 http://ftp.gentoo.org/gentoo stretch/main amd64 libgirepository-1.0-1 amd64 1.50.0-1;b1 [89.0 kB]");

term.echo("Get:89 http://ftp.gentoo.org/gentoo stretch/main amd64 gir1.2-glib-2.0 amd64 1.50.0-1;b1 [139 kB]");

term.echo("Get:90 http://ftp.gentoo.org/gentoo stretch/main amd64 libpolkit-gobject-1-0 amd64 0.105-18 [43.6 kB]");

term.echo("Get:91 http://ftp.gentoo.org/gentoo stretch/main amd64 libpolkit-agent-1-0 amd64 0.105-18 [24.3 kB]");

term.echo("Get:92 http://ftp.gentoo.org/gentoo stretch/main amd64 libpolkit-backend-1-0 amd64 0.105-18 [45.8 kB]");

term.echo("Get:93 http://ftp.gentoo.org/gentoo stretch/main amd64 policykit-1 amd64 0.105-18 [63.4 kB]");

term.echo("Get:94 http://ftp.gentoo.org/gentoo stretch/main amd64 libdbus-glib-1-2 amd64 0.108-2 [206 kB]");

term.echo("Get:95 http://ftp.gentoo.org/gentoo stretch/main amd64 python3-dbus amd64 1.2.4-1;b1 [184 kB]");

term.echo("Get:96 http://ftp.gentoo.org/gentoo stretch/main amd64 python3-gi amd64 3.22.0-2 [473 kB]");

term.echo("Get:97 http://ftp.gentoo.org/gentoo stretch/main amd64 python3-decorator all 4.0.11-1 [13.3 kB]");

term.echo("Get:98 http://ftp.gentoo.org/gentoo stretch/main amd64 python3-six all 1.10.0-3 [14.4 kB]");

term.echo("Get:99 http://ftp.gentoo.org/gentoo stretch/main amd64 python3-selinux amd64 2.6-3;b1 [171 kB]");

term.echo("Get:100 http://ftp.gentoo.org/gentoo stretch/main amd64 python3-slip all 0.6.1-3 [6704 B]");

term.echo("Get:101 http://ftp.gentoo.org/gentoo stretch/main amd64 python3-slip-dbus all 0.6.1-3 [9492 B]");

term.echo("Get:102 http://ftp.gentoo.org/gentoo stretch/main amd64 firewalld all 0.4.4.2-1 [418 kB]");

term.echo("Get:103 http://ftp.gentoo.org/gentoo stretch/main amd64 libcc1-0 amd64 6.3.0-18 [30.6 kB]");

term.echo("Get:104 http://ftp.gentoo.org/gentoo stretch/main amd64 libgomp1 amd64 6.3.0-18 [73.2 kB]");

term.echo("Get:105 http://ftp.gentoo.org/gentoo stretch/main amd64 libitm1 amd64 6.3.0-18 [27.4 kB]");

term.echo("Get:106 http://ftp.gentoo.org/gentoo stretch/main amd64 libatomic1 amd64 6.3.0-18 [8920 B]");

term.echo("Get:107 http://ftp.gentoo.org/gentoo stretch/main amd64 libasan3 amd64 6.3.0-18 [311 kB]");

term.echo("Get:108 http://ftp.gentoo.org/gentoo stretch/main amd64 liblsan0 amd64 6.3.0-18 [115 kB]");

term.echo("Get:109 http://ftp.gentoo.org/gentoo stretch/main amd64 libtsan0 amd64 6.3.0-18 [257 kB]");

term.echo("Get:110 http://ftp.gentoo.org/gentoo stretch/main amd64 libubsan0 amd64 6.3.0-18 [106 kB]");

term.echo("Get:111 http://ftp.gentoo.org/gentoo stretch/main amd64 libcilkrts5 amd64 6.3.0-18 [40.4 kB]");

term.echo("Get:112 http://ftp.gentoo.org/gentoo stretch/main amd64 libmpx2 amd64 6.3.0-18 [11.2 kB]");

term.echo("Get:113 http://ftp.gentoo.org/gentoo stretch/main amd64 libquadmath0 amd64 6.3.0-18 [131 kB]");

term.echo("Get:114 http://ftp.gentoo.org/gentoo stretch/main amd64 libgcc-6-dev amd64 6.3.0-18 [2297 kB]");

term.echo("Get:115 http://ftp.gentoo.org/gentoo stretch/main amd64 gcc-6 amd64 6.3.0-18 [6895 kB]");

term.echo("Get:116 http://ftp.gentoo.org/gentoo stretch/main amd64 gcc amd64 4:6.3.0-4 [5196 B]");

term.echo("Get:117 http://ftp.gentoo.org/gentoo stretch/main amd64 javascript-common all 11 [6120 B]");

term.echo("Get:118 http://ftp.gentoo.org/gentoo stretch/main amd64 php-common all 1:49 [14.1 kB]");

term.echo("Get:119 http://ftp.gentoo.org/gentoo stretch/main amd64 php7.0-common amd64 7.0.19-1 [868 kB]");

term.echo("Get:120 http://ftp.gentoo.org/gentoo stretch/main amd64 php7.0-json amd64 7.0.19-1 [17.1 kB]");

term.echo("Get:121 http://ftp.gentoo.org/gentoo stretch/main amd64 php7.0-opcache amd64 7.0.19-1 [77.2 kB]");

term.echo("Get:122 http://ftp.gentoo.org/gentoo stretch/main amd64 php7.0-readline amd64 7.0.19-1 [12.2 kB]");

term.echo("Get:123 http://ftp.gentoo.org/gentoo stretch/main amd64 php7.0-cli amd64 7.0.19-1 [1289 kB]");

term.echo("Get:124 http://ftp.gentoo.org/gentoo stretch/main amd64 libapache2-mod-php7.0 amd64 7.0.19-1 [1231 kB]");

term.echo("Get:125 http://ftp.gentoo.org/gentoo stretch/main amd64 libauthen-sasl-perl all 2.1600-1 [50.8 kB]");

term.echo("Get:126 http://ftp.gentoo.org/gentoo stretch/main amd64 libberkeleydb-perl amd64 0.55-1;b2 [116 kB]");

term.echo("Get:127 http://ftp.gentoo.org/gentoo stretch/main amd64 libcrypt-random-seed-perl all 0.03-1 [22.5 kB]");

term.echo("Get:128 http://ftp.gentoo.org/gentoo stretch/main amd64 libmath-random-isaac-perl all 1.003-1 [22.6 kB]");

term.echo("Get:129 http://ftp.gentoo.org/gentoo stretch/main amd64 libbytes-random-secure-perl all 0.28-1 [29.4 kB]");

term.echo("Get:130 http://ftp.gentoo.org/gentoo stretch/main amd64 libc-dev-bin amd64 2.24-11;deb9u1 [259 kB]");

term.echo("Get:131 http://ftp.gentoo.org/gentoo stretch/main amd64 libc6-dev amd64 2.24-11;deb9u1 [2365 kB]");

term.echo("Get:132 http://ftp.gentoo.org/gentoo stretch/main amd64 libhtml-tagset-perl all 3.20-3 [12.7 kB]");

term.echo("Get:133 http://ftp.gentoo.org/gentoo stretch/main amd64 liburi-perl all 1.71-1 [88.6 kB]");

term.echo("Get:134 http://ftp.gentoo.org/gentoo stretch/main amd64 libhtml-parser-perl amd64 3.72-3 [104 kB]");

term.echo("Get:135 http://ftp.gentoo.org/gentoo stretch/main amd64 libcgi-pm-perl all 4.35-1 [222 kB]");

term.echo("Get:136 http://ftp.gentoo.org/gentoo stretch/main amd64 libfcgi-perl amd64 0.78-2 [38.2 kB]");

term.echo("Get:137 http://ftp.gentoo.org/gentoo stretch/main amd64 libcgi-fast-perl all 1:2.12-1 [11.2 kB]");

term.echo("Get:138 http://ftp.gentoo.org/gentoo stretch/main amd64 libcrypt-openssl-bignum-perl amd64 0.07-2 [24.9 kB]");

term.echo("Get:139 http://ftp.gentoo.org/gentoo stretch/main amd64 libcrypt-openssl-rsa-perl amd64 0.28-5 [24.0 kB]");

term.echo("Get:140 http://ftp.gentoo.org/gentoo stretch/main amd64 libcrypt-ssleay-perl amd64 0.73.04-2 [57.1 kB]");

term.echo("Get:141 http://ftp.gentoo.org/gentoo stretch/main amd64 libmariadbclient18 amd64 10.1.23-9;deb9u1 [779 kB]");

term.echo("Get:142 http://ftp.gentoo.org/gentoo stretch/main amd64 libdbd-mysql-perl amd64 4.041-2 [114 kB]");

term.echo("Get:143 http://ftp.gentoo.org/gentoo stretch/main amd64 libdigest-hmac-perl all 1.03;dfsg-1 [12.3 kB]");

term.echo("Get:144 http://ftp.gentoo.org/gentoo stretch/main amd64 libencode-locale-perl all 1.05-1 [13.7 kB]");

term.echo("Get:145 http://ftp.gentoo.org/gentoo stretch/main amd64 liberror-perl all 0.17024-1 [26.9 kB]");

term.echo("Get:146 http://ftp.gentoo.org/gentoo stretch/main amd64 libfcgi0ldbl amd64 2.4.0-8.4;b1 [154 kB]");

term.echo("Get:147 http://ftp.gentoo.org/gentoo stretch/main amd64 libfcgi-bin amd64 2.4.0-8.4;b1 [12.2 kB]");

term.echo("Get:148 http://ftp.gentoo.org/gentoo stretch/main amd64 libfcgi-dev amd64 2.4.0-8.4;b1 [32.3 kB]");

term.echo("Get:149 http://ftp.gentoo.org/gentoo stretch/main amd64 libtimedate-perl all 2.3000-2 [42.2 kB]");

term.echo("Get:150 http://ftp.gentoo.org/gentoo stretch/main amd64 libhttp-date-perl all 6.02-1 [10.7 kB]");

term.echo("Get:151 http://ftp.gentoo.org/gentoo stretch/main amd64 libfile-listing-perl all 6.04-1 [10.3 kB]");

term.echo("Get:152 http://ftp.gentoo.org/gentoo stretch/main amd64 libfont-afm-perl all 1.20-2 [13.6 kB]");

term.echo("Get:153 http://ftp.gentoo.org/gentoo stretch/main amd64 libglib2.0-data all 2.50.3-2 [2517 kB]");

term.echo("Get:154 http://ftp.gentoo.org/gentoo stretch/main amd64 libio-html-perl all 1.001-1 [17.6 kB]");

term.echo("Get:155 http://ftp.gentoo.org/gentoo stretch/main amd64 liblwp-mediatypes-perl all 6.02-1 [22.1 kB]");

term.echo("Get:156 http://ftp.gentoo.org/gentoo stretch/main amd64 libhttp-message-perl all 6.11-1 [75.9 kB]");

term.echo("Get:157 http://ftp.gentoo.org/gentoo stretch/main amd64 libhtml-form-perl all 6.03-1 [23.9 kB]");

term.echo("Get:158 http://ftp.gentoo.org/gentoo stretch/main amd64 libhtml-tree-perl all 5.03-2 [210 kB]");

term.echo("Get:159 http://ftp.gentoo.org/gentoo stretch/main amd64 libhtml-format-perl all 2.12-1 [43.5 kB]");

term.echo("Get:160 http://ftp.gentoo.org/gentoo stretch/main amd64 libhtml-template-perl all 2.95-2 [67.1 kB]");

term.echo("Get:161 http://ftp.gentoo.org/gentoo stretch/main amd64 libhttp-cookies-perl all 6.01-1 [17.4 kB]");

term.echo("Get:162 http://ftp.gentoo.org/gentoo stretch/main amd64 libhttp-daemon-perl all 6.01-1 [17.3 kB]");

term.echo("Get:163 http://ftp.gentoo.org/gentoo stretch/main amd64 libhttp-negotiate-perl all 6.00-2 [13.6 kB]");

term.echo("Get:164 http://ftp.gentoo.org/gentoo stretch/main amd64 libio-multiplex-perl all 1.16-1 [22.6 kB]");

term.echo("Get:165 http://ftp.gentoo.org/gentoo stretch/main amd64 libsocket6-perl amd64 0.27-1;b1 [28.1 kB]");

term.echo("Get:166 http://ftp.gentoo.org/gentoo stretch/main amd64 libio-socket-inet6-perl all 2.72-2 [16.6 kB]");

term.echo("Get:167 http://ftp.gentoo.org/gentoo stretch/main amd64 libio-socket-ssl-perl all 2.044-1 [195 kB]");

term.echo("Get:168 http://ftp.gentoo.org/gentoo stretch/main amd64 libjs-jquery all 3.1.1-2 [154 kB]");

term.echo("Get:169 http://ftp.gentoo.org/gentoo stretch/main amd64 libnet-http-perl all 6.12-1 [23.8 kB]");

term.echo("Get:170 http://ftp.gentoo.org/gentoo stretch/main amd64 libwww-robotrules-perl all 6.01-1 [14.3 kB]");

term.echo("Get:171 http://ftp.gentoo.org/gentoo stretch/main amd64 libwww-perl all 6.15-1 [195 kB]");

term.echo("Get:172 http://ftp.gentoo.org/gentoo stretch/main amd64 liblwp-protocol-https-perl all 6.06-2 [9582 B]");

term.echo("Get:173 http://ftp.gentoo.org/gentoo stretch/main amd64 libnet-smtp-ssl-perl all 1.04-1 [6184 B]");

term.echo("Get:174 http://ftp.gentoo.org/gentoo stretch/main amd64 libmailtools-perl all 2.18-1 [88.5 kB]");

term.echo("Get:175 http://ftp.gentoo.org/gentoo stretch/main amd64 libnet-ip-perl all 1.26-1 [33.2 kB]");

term.echo("Get:176 http://ftp.gentoo.org/gentoo stretch/main amd64 libnet-dns-perl all 1.07-1 [362 kB]");

term.echo("Get:177 http://ftp.gentoo.org/gentoo stretch/main amd64 libmail-dkim-perl all 0.40-1 [134 kB]");

term.echo("Get:178 http://ftp.gentoo.org/gentoo stretch/main amd64 libnetaddr-ip-perl amd64 4.079;dfsg-1;b1 [103 kB]");

term.echo("Get:179 http://ftp.gentoo.org/gentoo stretch/main amd64 libmail-spf-perl all 2.9.0-4 [120 kB]");

term.echo("Get:180 http://ftp.gentoo.org/gentoo stretch/main amd64 libmath-random-isaac-xs-perl amd64 1.004-2;b2 [17.5 kB]");

term.echo("Get:181 http://ftp.gentoo.org/gentoo stretch/main amd64 libmcrypt4 amd64 2.5.8-3.3 [71.2 kB]");

term.echo("Get:182 http://ftp.gentoo.org/gentoo stretch/main amd64 libmemcached11 amd64 1.0.18-4.1 [93.7 kB]");

term.echo("Get:183 http://ftp.gentoo.org/gentoo stretch/main amd64 libmemcachedutil2 amd64 1.0.18-4.1 [22.3 kB]");

term.echo("Get:184 http://ftp.gentoo.org/gentoo stretch/main amd64 libnet-cidr-perl all 0.18-1 [14.0 kB]");

term.echo("Get:185 http://ftp.gentoo.org/gentoo stretch/main amd64 libnet-rblclient-perl all 0.5-3 [14.6 kB]");

term.echo("Get:186 http://ftp.gentoo.org/gentoo stretch/main amd64 libnet-server-perl all 2.008-3 [177 kB]");

term.echo("Get:187 http://ftp.gentoo.org/gentoo stretch/main amd64 libnet-xwhois-perl all 0.90-4 [22.0 kB]");

term.echo("Get:188 http://ftp.gentoo.org/gentoo stretch/main amd64 nginx-common all 1.10.3-1;deb9u1 [104 kB]");

term.echo("Get:189 http://ftp.gentoo.org/gentoo stretch/main amd64 libnginx-mod-http-auth-pam amd64 1.10.3-1;deb9u1 [85.8 kB]");

term.echo("Get:190 http://ftp.gentoo.org/gentoo stretch/main amd64 libnginx-mod-http-dav-ext amd64 1.10.3-1;deb9u1 [87.5 kB]");

term.echo("Get:191 http://ftp.gentoo.org/gentoo stretch/main amd64 libnginx-mod-http-echo amd64 1.10.3-1;deb9u1 [96.9 kB]");

term.echo("Get:192 http://ftp.gentoo.org/gentoo stretch/main amd64 libnginx-mod-http-geoip amd64 1.10.3-1;deb9u1 [87.0 kB]");

term.echo("Get:193 http://ftp.gentoo.org/gentoo stretch/main amd64 libnginx-mod-http-image-filter amd64 1.10.3-1;deb9u1 [89.9 kB]");

term.echo("Get:194 http://ftp.gentoo.org/gentoo stretch/main amd64 libnginx-mod-http-subs-filter amd64 1.10.3-1;deb9u1 [88.8 kB]");

term.echo("Get:195 http://ftp.gentoo.org/gentoo stretch/main amd64 libnginx-mod-http-upstream-fair amd64 1.10.3-1;deb9u1 [89.0 kB]");

term.echo("Get:196 http://ftp.gentoo.org/gentoo stretch/main amd64 libxslt1.1 amd64 1.1.29-2.1 [233 kB]");

term.echo("Get:197 http://ftp.gentoo.org/gentoo stretch/main amd64 libnginx-mod-http-xslt-filter amd64 1.10.3-1;deb9u1 [88.8 kB]");

term.echo("Get:198 http://ftp.gentoo.org/gentoo stretch/main amd64 libnginx-mod-mail amd64 1.10.3-1;deb9u1 [117 kB]");

term.echo("Get:199 http://ftp.gentoo.org/gentoo stretch/main amd64 libnginx-mod-stream amd64 1.10.3-1;deb9u1 [110 kB]");

term.echo("Get:200 http://ftp.gentoo.org/gentoo stretch/main amd64 libparse-syslog-perl all 1.10-2 [14.5 kB]");

term.echo("Get:201 http://ftp.gentoo.org/gentoo stretch/main amd64 libsasl2-modules amd64 2.1.27~101-g0780600;dfsg-3 [102 kB]");

term.echo("Get:202 http://ftp.gentoo.org/gentoo stretch/main amd64 libsys-hostname-long-perl all 1.5-1 [12.0 kB]");

term.echo("Get:203 http://ftp.gentoo.org/gentoo stretch/main amd64 libterm-readkey-perl amd64 2.37-1 [27.2 kB]");

term.echo("Get:204 http://ftp.gentoo.org/gentoo stretch/main amd64 libyaml-0-2 amd64 0.1.7-2 [47.6 kB]");

term.echo("Get:205 http://ftp.gentoo.org/gentoo stretch/main amd64 make amd64 4.1-9.1 [302 kB]");

term.echo("Get:206 http://ftp.gentoo.org/gentoo stretch/main amd64 manpages-dev all 4.10-2 [2145 kB]");

term.echo("Get:207 http://ftp.gentoo.org/gentoo stretch/main amd64 mysql-client amd64 5.5.9999;default [1698 B]");

term.echo("Get:208 http://ftp.gentoo.org/gentoo stretch/main amd64 mysql-server amd64 5.5.9999;default [1706 B]");

term.echo("Get:209 http://ftp.gentoo.org/gentoo stretch/main amd64 nginx-full amd64 1.10.3-1;deb9u1 [458 kB]");

term.echo("Get:210 http://ftp.gentoo.org/gentoo stretch/main amd64 php7.0-fpm amd64 7.0.19-1 [1297 kB]");

term.echo("Get:211 http://ftp.gentoo.org/gentoo stretch/main amd64 php7.0-cgi amd64 7.0.19-1 [1251 kB]");

term.echo("Get:212 http://ftp.gentoo.org/gentoo stretch/main amd64 php7.0 all 7.0.19-1 [48.7 kB]");

term.echo("Get:213 http://ftp.gentoo.org/gentoo stretch/main amd64 php all 1:7.0;49 [5016 B]");

term.echo("Get:214 http://ftp.gentoo.org/gentoo stretch/main amd64 php-cgi all 1:7.0;49 [5186 B]");

term.echo("Get:215 http://ftp.gentoo.org/gentoo stretch/main amd64 php-cli all 1:7.0;49 [5098 B]");

term.echo("Get:216 http://ftp.gentoo.org/gentoo stretch/main amd64 php-fpm all 1:7.0;49 [5102 B]");

term.echo("Get:217 http://ftp.gentoo.org/gentoo stretch/main amd64 php7.0-mbstring amd64 7.0.19-1 [465 kB]");

term.echo("Get:218 http://ftp.gentoo.org/gentoo stretch/main amd64 php-mbstring all 1:7.0;49 [5058 B]");

term.echo("Get:219 http://ftp.gentoo.org/gentoo stretch/main amd64 php7.0-mcrypt amd64 7.0.19-1 [14.3 kB]");

term.echo("Get:220 http://ftp.gentoo.org/gentoo stretch/main amd64 php-mcrypt all 1:7.0;49 [5048 B]");

term.echo("Get:221 http://ftp.gentoo.org/gentoo stretch/main amd64 php7.0-xml amd64 7.0.19-1 [112 kB]");

term.echo("Get:222 http://ftp.gentoo.org/gentoo stretch/main amd64 php-xml all 1:7.0;49 [5068 B]");

term.echo("Get:223 http://ftp.gentoo.org/gentoo stretch/main amd64 php-pear all 1:1.10.1;submodules;notgz-9 [282 kB]");

term.echo("Get:224 http://ftp.gentoo.org/gentoo stretch/main amd64 php7.0-mysql amd64 7.0.19-1 [124 kB]");

term.echo("Get:225 http://ftp.gentoo.org/gentoo stretch/main amd64 postgrey all 1.36-3 [57.2 kB]");

term.echo("Get:226 http://ftp.gentoo.org/gentoo stretch/main amd64 procmail amd64 3.22-25;b1 [142 kB]");

term.echo("Get:227 http://ftp.gentoo.org/gentoo stretch/main amd64 proftpd-basic amd64 1.3.5b-4 [2477 kB]");

term.echo("Get:228 http://ftp.gentoo.org/gentoo stretch/main amd64 python3-pyinotify all 0.9.6-1 [26.9 kB]");

term.echo("Get:229 http://ftp.gentoo.org/gentoo stretch/main amd64 python3-systemd amd64 233-1 [33.3 kB]");

term.echo("Get:230 http://ftp.gentoo.org/gentoo stretch/main amd64 rubygems-integration all 1.11 [4994 B]");

term.echo("Get:231 http://ftp.gentoo.org/gentoo stretch/main amd64 ruby-did-you-mean all 1.0.0-2 [11.2 kB]");

term.echo("Get:232 http://ftp.gentoo.org/gentoo stretch/main amd64 ruby-minitest all 5.9.0-1 [51.1 kB]");

term.echo("Get:233 http://ftp.gentoo.org/gentoo stretch/main amd64 ruby-net-telnet all 0.1.1-2 [12.5 kB]");

term.echo("Get:234 http://ftp.gentoo.org/gentoo stretch/main amd64 ruby-power-assert all 0.3.0-1 [7902 B]");

term.echo("Get:235 http://ftp.gentoo.org/gentoo stretch/main amd64 ruby-test-unit all 3.1.7-2 [69.6 kB]");

term.echo("Get:236 http://ftp.gentoo.org/gentoo stretch/main amd64 libruby2.3 amd64 2.3.3-1 [3104 kB]");

term.echo("Get:237 http://ftp.gentoo.org/gentoo stretch/main amd64 ruby2.3 amd64 2.3.3-1 [186 kB]");

term.echo("Get:238 http://ftp.gentoo.org/gentoo stretch/main amd64 ruby amd64 1:2.3.3 [10.8 kB]");

term.echo("Get:239 http://ftp.gentoo.org/gentoo stretch/main amd64 rake all 10.5.0-2 [49.4 kB]");

term.echo("Get:240 http://ftp.gentoo.org/gentoo stretch/main amd64 re2c amd64 0.16-2 [229 kB]");

term.echo("Get:241 http://ftp.gentoo.org/gentoo stretch/main amd64 ruby2.3-doc all 2.3.3-1 [3510 kB]");

term.echo("Get:242 http://ftp.gentoo.org/gentoo stretch/main amd64 ri all 1:2.3.3 [9476 B]");

term.echo("Get:243 http://ftp.gentoo.org/gentoo stretch/main amd64 spamassassin all 3.4.1-6 [1101 kB]");

term.echo("Get:244 http://ftp.gentoo.org/gentoo stretch/main amd64 sa-compile all 3.4.1-6 [53.9 kB]");

term.echo("Get:245 http://ftp.gentoo.org/gentoo stretch/main amd64 db-util all 5.3.1 [2782 B]");

term.echo("Get:246 http://ftp.gentoo.org/gentoo stretch/main amd64 sasl2-bin amd64 2.1.27~101-g0780600;dfsg-3 [162 kB]");

term.echo("Get:247 http://ftp.gentoo.org/gentoo stretch/main amd64 shared-mime-info amd64 1.8-1 [731 kB]");

term.echo("Get:248 http://ftp.gentoo.org/gentoo stretch/main amd64 spamc amd64 3.4.1-6;b1 [89.5 kB]");

term.echo("Get:249 http://ftp.gentoo.org/gentoo stretch/main amd64 unzip amd64 6.0-21 [170 kB]");

term.echo("Get:250 http://ftp.gentoo.org/gentoo stretch/main amd64 zip amd64 3.0-11;b1 [234 kB]");

term.echo("Get:251 http://ftp.gentoo.org/gentoo stretch/main amd64 postfix-pcre amd64 3.1.4-7 [318 kB]");

term.echo("Get:252 http://ftp.gentoo.org/gentoo stretch/main amd64 whois amd64 5.2.15 [76.3 kB]");

term.echo("Get:253 http://ftp.gentoo.org/gentoo stretch/main amd64 xdg-user-dirs amd64 0.15-2;b1 [52.2 kB]");

term.echo("Get:254 http://ftp.gentoo.org/gentoo stretch/main amd64 libipset3 amd64 6.30-2 [56.5 kB]");

term.echo("Get:255 http://ftp.gentoo.org/gentoo stretch/main amd64 ipset amd64 6.30-2 [47.5 kB]");

term.echo("Get:256 http://ftp.gentoo.org/gentoo stretch/main amd64 libconfig-inifiles-perl all 2.94-1 [53.4 kB]");

term.echo("perl: warning: Setting locale failed.");

term.echo("perl: warning: Please check that your locale settings:");

term.echo("        LANGUAGE = (unset),");

term.echo("        LC_ALL = (unset),");

term.echo("        LANG = en_AU.UTF-8");

term.echo("    are supported and installed on your system.");

term.echo("perl: warning: Falling back to the standard locale (C).");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("debconf: delaying package configuration, since apt-utils is not installed");

term.echo("perl: warning: Setting locale failed.");

term.echo("perl: warning: Please check that your locale settings:");

term.echo("        LANGUAGE = (unset),");

term.echo("        LC_ALL = (unset),");

term.echo("        LANG = en_AU.UTF-8");

term.echo("    are supported and installed on your system.");

term.echo("perl: warning: Falling back to the standard locale (C).");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("debconf: delaying package configuration, since apt-utils is not installed");

term.echo("Fetched 123 MB in 48s (2508 kB/s)");

term.echo("Selecting previously unselected package libapr1:amd64.");

term.echo("(Reading database ... 52956 files and directories currently installed.)");

term.echo("Preparing to unpack .../00-libapr1_1.5.2-5_amd64.deb ...");

term.echo("Unpacking libapr1:amd64 (1.5.2-5) ...");

term.echo("Selecting previously unselected package libaprutil1:amd64.");

term.echo("Preparing to unpack .../01-libaprutil1_1.5.4-3_amd64.deb ...");

term.echo("Unpacking libaprutil1:amd64 (1.5.4-3) ...");

term.echo("Selecting previously unselected package libaprutil1-dbd-sqlite3:amd64.");

term.echo("Preparing to unpack .../02-libaprutil1-dbd-sqlite3_1.5.4-3_amd64.deb ...");

term.echo("Unpacking libaprutil1-dbd-sqlite3:amd64 (1.5.4-3) ...");

term.echo("Selecting previously unselected package libaprutil1-ldap:amd64.");

term.echo("Preparing to unpack .../03-libaprutil1-ldap_1.5.4-3_amd64.deb ...");

term.echo("Unpacking libaprutil1-ldap:amd64 (1.5.4-3) ...");

term.echo("Selecting previously unselected package liblua5.2-0:amd64.");

term.echo("Preparing to unpack .../04-liblua5.2-0_5.2.4-1.1;b2_amd64.deb ...");

term.echo("Unpacking liblua5.2-0:amd64 (5.2.4-1.1;b2) ...");

term.echo("Selecting previously unselected package libnghttp2-14:amd64.");

term.echo("Preparing to unpack .../05-libnghttp2-14_1.18.1-1_amd64.deb ...");

term.echo("Unpacking libnghttp2-14:amd64 (1.18.1-1) ...");

term.echo("Selecting previously unselected package apache2-bin.");

term.echo("Preparing to unpack .../06-apache2-bin_2.4.25-3;deb9u2_amd64.deb ...");

term.echo("Unpacking apache2-bin (2.4.25-3;deb9u2) ...");

term.echo("Selecting previously unselected package apache2-utils.");

term.echo("Preparing to unpack .../07-apache2-utils_2.4.25-3;deb9u2_amd64.deb ...");

term.echo("Unpacking apache2-utils (2.4.25-3;deb9u2) ...");

term.echo("Selecting previously unselected package apache2-data.");

term.echo("Preparing to unpack .../08-apache2-data_2.4.25-3;deb9u2_all.deb ...");

term.echo("Unpacking apache2-data (2.4.25-3;deb9u2) ...");

term.echo("Selecting previously unselected package apache2.");

term.echo("Preparing to unpack .../09-apache2_2.4.25-3;deb9u2_amd64.deb ...");

term.echo("Unpacking apache2 (2.4.25-3;deb9u2) ...");

term.echo("Selecting previously unselected package fonts-lato.");

term.echo("Preparing to unpack .../10-fonts-lato_2.0-1_all.deb ...");

term.echo("Unpacking fonts-lato (2.0-1) ...");

term.echo("Selecting previously unselected package libxau6:amd64.");

term.echo("Preparing to unpack .../11-libxau6_1%3a1.0.8-1_amd64.deb ...");

term.echo("Unpacking libxau6:amd64 (1:1.0.8-1) ...");

term.echo("Selecting previously unselected package mysql-common.");

term.echo("Preparing to unpack .../12-mysql-common_5.8;1.0.2_all.deb ...");

term.echo("Unpacking mysql-common (5.8;1.0.2) ...");

term.echo("Selecting previously unselected package mariadb-common.");

term.echo("Preparing to unpack .../13-mariadb-common_10.1.23-9;deb9u1_all.deb ...");

term.echo("Unpacking mariadb-common (10.1.23-9;deb9u1) ...");

term.echo("Selecting previously unselected package galera-3.");

term.echo("Preparing to unpack .../14-galera-3_25.3.19-2_amd64.deb ...");

term.echo("Unpacking galera-3 (25.3.19-2) ...");

term.echo("Selecting previously unselected package libdbi-perl.");

term.echo("Preparing to unpack .../15-libdbi-perl_1.636-1;b1_amd64.deb ...");

term.echo("Unpacking libdbi-perl (1.636-1;b1) ...");

term.echo("Selecting previously unselected package libaio1:amd64.");

term.echo("Preparing to unpack .../16-libaio1_0.3.110-3_amd64.deb ...");

term.echo("Unpacking libaio1:amd64 (0.3.110-3) ...");

term.echo("Selecting previously unselected package libreadline5:amd64.");

term.echo("Preparing to unpack .../17-libreadline5_5.2;dfsg-3;b1_amd64.deb ...");

term.echo("Unpacking libreadline5:amd64 (5.2;dfsg-3;b1) ...");

term.echo("Selecting previously unselected package mariadb-client-core-10.1.");

term.echo("Preparing to unpack .../18-mariadb-client-core-10.1_10.1.23-9;deb9u1_amd64.deb ...");

term.echo("Unpacking mariadb-client-core-10.1 (10.1.23-9;deb9u1) ...");

term.echo("Selecting previously unselected package liblzo2-2:amd64.");

term.echo("Preparing to unpack .../19-liblzo2-2_2.08-1.2;b2_amd64.deb ...");

term.echo("Unpacking liblzo2-2:amd64 (2.08-1.2;b2) ...");

term.echo("Selecting previously unselected package libarchive13:amd64.");

term.echo("Preparing to unpack .../20-libarchive13_3.2.2-2_amd64.deb ...");

term.echo("Unpacking libarchive13:amd64 (3.2.2-2) ...");

term.echo("Selecting previously unselected package libjemalloc1.");

term.echo("Preparing to unpack .../21-libjemalloc1_3.6.0-9.1_amd64.deb ...");

term.echo("Unpacking libjemalloc1 (3.6.0-9.1) ...");

term.echo("Selecting previously unselected package mariadb-client-10.1.");

term.echo("Preparing to unpack .../22-mariadb-client-10.1_10.1.23-9;deb9u1_amd64.deb ...");

term.echo("Unpacking mariadb-client-10.1 (10.1.23-9;deb9u1) ...");

term.echo("Selecting previously unselected package mariadb-server-core-10.1.");

term.echo("Preparing to unpack .../23-mariadb-server-core-10.1_10.1.23-9;deb9u1_amd64.deb ...");

term.echo("Unpacking mariadb-server-core-10.1 (10.1.23-9;deb9u1) ...");

term.echo("Selecting previously unselected package socat.");

term.echo("Preparing to unpack .../24-socat_1.7.3.1-2;deb9u1_amd64.deb ...");

term.echo("Unpacking socat (1.7.3.1-2;deb9u1) ...");

term.echo("Setting up mysql-common (5.8;1.0.2) ...");

term.echo("update-alternatives: using /etc/mysql/my.cnf.fallback to provide /etc/mysql/my.cnf (my.cnf) in auto mode");

term.echo("Setting up mariadb-common (10.1.23-9;deb9u1) ...");

term.echo("update-alternatives: using /etc/mysql/mariadb.cnf to provide /etc/mysql/my.cnf (my.cnf) in auto mode");

term.echo("Selecting previously unselected package mariadb-server-10.1.");

term.echo("(Reading database ... 54097 files and directories currently installed.)");

term.echo("Preparing to unpack .../000-mariadb-server-10.1_10.1.23-9;deb9u1_amd64.deb ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("Unpacking mariadb-server-10.1 (10.1.23-9;deb9u1) ...");

term.echo("Selecting previously unselected package ntpdate.");

term.echo("Preparing to unpack .../001-ntpdate_1%3a4.2.8p10;dfsg-3_amd64.deb ...");

term.echo("Unpacking ntpdate (1:4.2.8p10;dfsg-3) ...");

term.echo("Selecting previously unselected package libpng16-16:amd64.");

term.echo("Preparing to unpack .../002-libpng16-16_1.6.28-1_amd64.deb ...");

term.echo("Unpacking libpng16-16:amd64 (1.6.28-1) ...");

term.echo("Selecting previously unselected package libfreetype6:amd64.");

term.echo("Preparing to unpack .../003-libfreetype6_2.6.3-3.2_amd64.deb ...");

term.echo("Unpacking libfreetype6:amd64 (2.6.3-3.2) ...");

term.echo("Selecting previously unselected package fonts-dejavu-core.");

term.echo("Preparing to unpack .../004-fonts-dejavu-core_2.37-1_all.deb ...");

term.echo("Unpacking fonts-dejavu-core (2.37-1) ...");

term.echo("Selecting previously unselected package fontconfig-config.");

term.echo("Preparing to unpack .../005-fontconfig-config_2.11.0-6.7_all.deb ...");

term.echo("Unpacking fontconfig-config (2.11.0-6.7) ...");

term.echo("Selecting previously unselected package libfontconfig1:amd64.");

term.echo("Preparing to unpack .../006-libfontconfig1_2.11.0-6.7;b1_amd64.deb ...");

term.echo("Unpacking libfontconfig1:amd64 (2.11.0-6.7;b1) ...");

term.echo("Selecting previously unselected package libjpeg62-turbo:amd64.");

term.echo("Preparing to unpack .../007-libjpeg62-turbo_1%3a1.5.1-2_amd64.deb ...");

term.echo("Unpacking libjpeg62-turbo:amd64 (1:1.5.1-2) ...");

term.echo("Selecting previously unselected package libjbig0:amd64.");

term.echo("Preparing to unpack .../008-libjbig0_2.1-3.1;b2_amd64.deb ...");

term.echo("Unpacking libjbig0:amd64 (2.1-3.1;b2) ...");

term.echo("Selecting previously unselected package libtiff5:amd64.");

term.echo("Preparing to unpack .../009-libtiff5_4.0.8-2;deb9u1_amd64.deb ...");

term.echo("Unpacking libtiff5:amd64 (4.0.8-2;deb9u1) ...");

term.echo("Selecting previously unselected package libwebp6:amd64.");

term.echo("Preparing to unpack .../010-libwebp6_0.5.2-1_amd64.deb ...");

term.echo("Unpacking libwebp6:amd64 (0.5.2-1) ...");

term.echo("Selecting previously unselected package libxdmcp6:amd64.");

term.echo("Preparing to unpack .../011-libxdmcp6_1%3a1.1.2-3_amd64.deb ...");

term.echo("Unpacking libxdmcp6:amd64 (1:1.1.2-3) ...");

term.echo("Selecting previously unselected package libxcb1:amd64.");

term.echo("Preparing to unpack .../012-libxcb1_1.12-1_amd64.deb ...");

term.echo("Unpacking libxcb1:amd64 (1.12-1) ...");

term.echo("Selecting previously unselected package libx11-data.");

term.echo("Preparing to unpack .../013-libx11-data_2%3a1.6.4-3_all.deb ...");

term.echo("Unpacking libx11-data (2:1.6.4-3) ...");

term.echo("Selecting previously unselected package libx11-6:amd64.");

term.echo("Preparing to unpack .../014-libx11-6_2%3a1.6.4-3_amd64.deb ...");

term.echo("Unpacking libx11-6:amd64 (2:1.6.4-3) ...");

term.echo("Selecting previously unselected package libxpm4:amd64.");

term.echo("Preparing to unpack .../015-libxpm4_1%3a3.5.12-1_amd64.deb ...");

term.echo("Unpacking libxpm4:amd64 (1:3.5.12-1) ...");

term.echo("Selecting previously unselected package libgd3:amd64.");

term.echo("Preparing to unpack .../016-libgd3_2.2.4-2_amd64.deb ...");

term.echo("Unpacking libgd3:amd64 (2.2.4-2) ...");

term.echo("Selecting previously unselected package webalizer.");

term.echo("Preparing to unpack .../017-webalizer_2.23.08-1;b3_amd64.deb ...");

term.echo("Unpacking webalizer (2.23.08-1;b3) ...");

term.echo("Selecting previously unselected package libirs141:amd64.");

term.echo("Preparing to unpack .../018-libirs141_1%3a9.10.3.dfsg.P4-12.3;deb9u2_amd64.deb ...");

term.echo("Unpacking libirs141:amd64 (1:9.10.3.dfsg.P4-12.3;deb9u2) ...");

term.echo("Selecting previously unselected package libmagic-mgc.");

term.echo("Preparing to unpack .../019-libmagic-mgc_1%3a5.30-1_amd64.deb ...");

term.echo("Unpacking libmagic-mgc (1:5.30-1) ...");

term.echo("Selecting previously unselected package libmagic1:amd64.");

term.echo("Preparing to unpack .../020-libmagic1_1%3a5.30-1_amd64.deb ...");

term.echo("Unpacking libmagic1:amd64 (1:5.30-1) ...");

term.echo("Selecting previously unselected package awstats.");

term.echo("Preparing to unpack .../021-awstats_7.6;dfsg-1_all.deb ...");

term.echo("Unpacking awstats (7.6;dfsg-1) ...");

term.echo("Selecting previously unselected package bind9utils.");

term.echo("Preparing to unpack .../022-bind9utils_1%3a9.10.3.dfsg.P4-12.3;deb9u2_amd64.deb ...");

term.echo("Unpacking bind9utils (1:9.10.3.dfsg.P4-12.3;deb9u2) ...");

term.echo("Selecting previously unselected package bind9.");

term.echo("Preparing to unpack .../023-bind9_1%3a9.10.3.dfsg.P4-12.3;deb9u2_amd64.deb ...");

term.echo("Unpacking bind9 (1:9.10.3.dfsg.P4-12.3;deb9u2) ...");

term.echo("Selecting previously unselected package binutils.");

term.echo("Preparing to unpack .../024-binutils_2.28-5_amd64.deb ...");

term.echo("Unpacking binutils (2.28-5) ...");

term.echo("Selecting previously unselected package ca-certificates.");

term.echo("Preparing to unpack .../025-ca-certificates_20161130;nmu1_all.deb ...");

term.echo("Unpacking ca-certificates (20161130;nmu1) ...");

term.echo("Selecting previously unselected package clamav-base.");

term.echo("Preparing to unpack .../026-clamav-base_0.99.2;dfsg-6_all.deb ...");

term.echo("Unpacking clamav-base (0.99.2;dfsg-6) ...");

term.echo("Selecting previously unselected package libjson-c3:amd64.");

term.echo("Preparing to unpack .../027-libjson-c3_0.12.1-1.1_amd64.deb ...");

term.echo("Unpacking libjson-c3:amd64 (0.12.1-1.1) ...");

term.echo("Selecting previously unselected package libllvm3.8:amd64.");

term.echo("Preparing to unpack .../028-libllvm3.8_1%3a3.8.1-24_amd64.deb ...");

term.echo("Unpacking libllvm3.8:amd64 (1:3.8.1-24) ...");

term.echo("Selecting previously unselected package libltdl7:amd64.");

term.echo("Preparing to unpack .../029-libltdl7_2.4.6-2_amd64.deb ...");

term.echo("Unpacking libltdl7:amd64 (2.4.6-2) ...");

term.echo("Selecting previously unselected package libmspack0:amd64.");

term.echo("Preparing to unpack .../030-libmspack0_0.5-1;b2_amd64.deb ...");

term.echo("Unpacking libmspack0:amd64 (0.5-1;b2) ...");

term.echo("Selecting previously unselected package libtfm1:amd64.");

term.echo("Preparing to unpack .../031-libtfm1_0.13-4_amd64.deb ...");

term.echo("Unpacking libtfm1:amd64 (0.13-4) ...");

term.echo("Selecting previously unselected package libclamav7:amd64.");

term.echo("Preparing to unpack .../032-libclamav7_0.99.2;dfsg-6;b1_amd64.deb ...");

term.echo("Unpacking libclamav7:amd64 (0.99.2;dfsg-6;b1) ...");

term.echo("Selecting previously unselected package clamav-freshclam.");

term.echo("Preparing to unpack .../033-clamav-freshclam_0.99.2;dfsg-6;b1_amd64.deb ...");

term.echo("Unpacking clamav-freshclam (0.99.2;dfsg-6;b1) ...");

term.echo("Selecting previously unselected package librtmp1:amd64.");

term.echo("Preparing to unpack .../034-librtmp1_2.4;20151223.gitfa8646d.1-1;b1_amd64.deb ...");

term.echo("Unpacking librtmp1:amd64 (2.4;20151223.gitfa8646d.1-1;b1) ...");

term.echo("Selecting previously unselected package libssh2-1:amd64.");

term.echo("Preparing to unpack .../035-libssh2-1_1.7.0-1_amd64.deb ...");

term.echo("Unpacking libssh2-1:amd64 (1.7.0-1) ...");

term.echo("Selecting previously unselected package libcurl3:amd64.");

term.echo("Preparing to unpack .../036-libcurl3_7.52.1-5_amd64.deb ...");

term.echo("Unpacking libcurl3:amd64 (7.52.1-5) ...");

term.echo("Selecting previously unselected package clamav.");

term.echo("Preparing to unpack .../037-clamav_0.99.2;dfsg-6;b1_amd64.deb ...");

term.echo("Unpacking clamav (0.99.2;dfsg-6;b1) ...");

term.echo("Selecting previously unselected package clamav-daemon.");

term.echo("Preparing to unpack .../038-clamav-daemon_0.99.2;dfsg-6;b1_amd64.deb ...");

term.echo("Unpacking clamav-daemon (0.99.2;dfsg-6;b1) ...");

term.echo("Selecting previously unselected package clamav-docs.");

term.echo("Preparing to unpack .../039-clamav-docs_0.99.2;dfsg-6_all.deb ...");

term.echo("Unpacking clamav-docs (0.99.2;dfsg-6) ...");

term.echo("Selecting previously unselected package clamav-testfiles.");

term.echo("Preparing to unpack .../040-clamav-testfiles_0.99.2;dfsg-6_all.deb ...");

term.echo("Unpacking clamav-testfiles (0.99.2;dfsg-6) ...");

term.echo("Selecting previously unselected package clamdscan.");

term.echo("Preparing to unpack .../041-clamdscan_0.99.2;dfsg-6;b1_amd64.deb ...");

term.echo("Unpacking clamdscan (0.99.2;dfsg-6;b1) ...");

term.echo("Selecting previously unselected package libisl15:amd64.");

term.echo("Preparing to unpack .../042-libisl15_0.18-1_amd64.deb ...");

term.echo("Unpacking libisl15:amd64 (0.18-1) ...");

term.echo("Selecting previously unselected package libmpc3:amd64.");

term.echo("Preparing to unpack .../043-libmpc3_1.0.3-1;b2_amd64.deb ...");

term.echo("Unpacking libmpc3:amd64 (1.0.3-1;b2) ...");

term.echo("Selecting previously unselected package cpp-6.");

term.echo("Preparing to unpack .../044-cpp-6_6.3.0-18_amd64.deb ...");

term.echo("Unpacking cpp-6 (6.3.0-18) ...");

term.echo("Selecting previously unselected package cpp.");

term.echo("Preparing to unpack .../045-cpp_4%3a6.3.0-4_amd64.deb ...");

term.echo("Unpacking cpp (4:6.3.0-4) ...");

term.echo("Selecting previously unselected package db5.3-util.");

term.echo("Preparing to unpack .../046-db5.3-util_5.3.28-12;b1_amd64.deb ...");

term.echo("Unpacking db5.3-util (5.3.28-12;b1) ...");

term.echo("Selecting previously unselected package default-mysql-client.");

term.echo("Preparing to unpack .../047-default-mysql-client_1.0.2_all.deb ...");

term.echo("Unpacking default-mysql-client (1.0.2) ...");

term.echo("Selecting previously unselected package default-mysql-server.");

term.echo("Preparing to unpack .../048-default-mysql-server_1.0.2_all.deb ...");

term.echo("Unpacking default-mysql-server (1.0.2) ...");

term.echo("Selecting previously unselected package libexttextcat-data.");

term.echo("Preparing to unpack .../049-libexttextcat-data_3.4.4-2_all.deb ...");

term.echo("Unpacking libexttextcat-data (3.4.4-2) ...");

term.echo("Selecting previously unselected package libexttextcat-2.0-0:amd64.");

term.echo("Preparing to unpack .../050-libexttextcat-2.0-0_3.4.4-2;b1_amd64.deb ...");

term.echo("Unpacking libexttextcat-2.0-0:amd64 (3.4.4-2;b1) ...");

term.echo("Selecting previously unselected package libstemmer0d:amd64.");

term.echo("Preparing to unpack .../051-libstemmer0d_0;svn585-1;b2_amd64.deb ...");

term.echo("Unpacking libstemmer0d:amd64 (0;svn585-1;b2) ...");

term.echo("Selecting previously unselected package dovecot-core.");

term.echo("Preparing to unpack .../052-dovecot-core_1%3a2.2.27-3;deb9u1_amd64.deb ...");

term.echo("Unpacking dovecot-core (1:2.2.27-3;deb9u1) ...");

term.echo("Selecting previously unselected package dovecot-imapd.");

term.echo("Preparing to unpack .../053-dovecot-imapd_1%3a2.2.27-3;deb9u1_amd64.deb ...");

term.echo("Unpacking dovecot-imapd (1:2.2.27-3;deb9u1) ...");

term.echo("Selecting previously unselected package dovecot-pop3d.");

term.echo("Preparing to unpack .../054-dovecot-pop3d_1%3a2.2.27-3;deb9u1_amd64.deb ...");

term.echo("Unpacking dovecot-pop3d (1:2.2.27-3;deb9u1) ...");

term.echo("Selecting previously unselected package ebtables.");

term.echo("Preparing to unpack .../055-ebtables_2.0.10.4-3.5;b1_amd64.deb ...");

term.echo("Unpacking ebtables (2.0.10.4-3.5;b1) ...");

term.echo("Selecting previously unselected package fail2ban.");

term.echo("Preparing to unpack .../056-fail2ban_0.9.6-2_all.deb ...");

term.echo("Unpacking fail2ban (0.9.6-2) ...");

term.echo("Selecting previously unselected package libglib2.0-0:amd64.");

term.echo("Preparing to unpack .../057-libglib2.0-0_2.50.3-2_amd64.deb ...");

term.echo("Unpacking libglib2.0-0:amd64 (2.50.3-2) ...");

term.echo("Selecting previously unselected package libgirepository-1.0-1:amd64.");

term.echo("Preparing to unpack .../058-libgirepository-1.0-1_1.50.0-1;b1_amd64.deb ...");

term.echo("Unpacking libgirepository-1.0-1:amd64 (1.50.0-1;b1) ...");

term.echo("Selecting previously unselected package gir1.2-glib-2.0:amd64.");

term.echo("Preparing to unpack .../059-gir1.2-glib-2.0_1.50.0-1;b1_amd64.deb ...");

term.echo("Unpacking gir1.2-glib-2.0:amd64 (1.50.0-1;b1) ...");

term.echo("Selecting previously unselected package libpolkit-gobject-1-0:amd64.");

term.echo("Preparing to unpack .../060-libpolkit-gobject-1-0_0.105-18_amd64.deb ...");

term.echo("Unpacking libpolkit-gobject-1-0:amd64 (0.105-18) ...");

term.echo("Selecting previously unselected package libpolkit-agent-1-0:amd64.");

term.echo("Preparing to unpack .../061-libpolkit-agent-1-0_0.105-18_amd64.deb ...");

term.echo("Unpacking libpolkit-agent-1-0:amd64 (0.105-18) ...");

term.echo("Selecting previously unselected package libpolkit-backend-1-0:amd64.");

term.echo("Preparing to unpack .../062-libpolkit-backend-1-0_0.105-18_amd64.deb ...");

term.echo("Unpacking libpolkit-backend-1-0:amd64 (0.105-18) ...");

term.echo("Selecting previously unselected package policykit-1.");

term.echo("Preparing to unpack .../063-policykit-1_0.105-18_amd64.deb ...");

term.echo("Unit polkit.service does not exist, proceeding anyway.");

term.echo("Created symlink /run/systemd/system/polkit.service → /dev/null.");

term.echo("Unpacking policykit-1 (0.105-18) ...");

term.echo("Selecting previously unselected package libdbus-glib-1-2:amd64.");

term.echo("Preparing to unpack .../064-libdbus-glib-1-2_0.108-2_amd64.deb ...");

term.echo("Unpacking libdbus-glib-1-2:amd64 (0.108-2) ...");

term.echo("Selecting previously unselected package python3-dbus.");

term.echo("Preparing to unpack .../065-python3-dbus_1.2.4-1;b1_amd64.deb ...");

term.echo("Unpacking python3-dbus (1.2.4-1;b1) ...");

term.echo("Selecting previously unselected package python3-gi.");

term.echo("Preparing to unpack .../066-python3-gi_3.22.0-2_amd64.deb ...");

term.echo("Unpacking python3-gi (3.22.0-2) ...");

term.echo("Selecting previously unselected package python3-decorator.");

term.echo("Preparing to unpack .../067-python3-decorator_4.0.11-1_all.deb ...");

term.echo("Unpacking python3-decorator (4.0.11-1) ...");

term.echo("Selecting previously unselected package python3-six.");

term.echo("Preparing to unpack .../068-python3-six_1.10.0-3_all.deb ...");

term.echo("Unpacking python3-six (1.10.0-3) ...");

term.echo("Selecting previously unselected package python3-selinux.");

term.echo("Preparing to unpack .../069-python3-selinux_2.6-3;b1_amd64.deb ...");

term.echo("Unpacking python3-selinux (2.6-3;b1) ...");

term.echo("Selecting previously unselected package python3-slip.");

term.echo("Preparing to unpack .../070-python3-slip_0.6.1-3_all.deb ...");

term.echo("Unpacking python3-slip (0.6.1-3) ...");

term.echo("Selecting previously unselected package python3-slip-dbus.");

term.echo("Preparing to unpack .../071-python3-slip-dbus_0.6.1-3_all.deb ...");

term.echo("Unpacking python3-slip-dbus (0.6.1-3) ...");

term.echo("Selecting previously unselected package firewalld.");

term.echo("Preparing to unpack .../072-firewalld_0.4.4.2-1_all.deb ...");

term.echo("Unpacking firewalld (0.4.4.2-1) ...");

term.echo("Selecting previously unselected package libcc1-0:amd64.");

term.echo("Preparing to unpack .../073-libcc1-0_6.3.0-18_amd64.deb ...");

term.echo("Unpacking libcc1-0:amd64 (6.3.0-18) ...");

term.echo("Selecting previously unselected package libgomp1:amd64.");

term.echo("Preparing to unpack .../074-libgomp1_6.3.0-18_amd64.deb ...");

term.echo("Unpacking libgomp1:amd64 (6.3.0-18) ...");

term.echo("Selecting previously unselected package libitm1:amd64.");

term.echo("Preparing to unpack .../075-libitm1_6.3.0-18_amd64.deb ...");

term.echo("Unpacking libitm1:amd64 (6.3.0-18) ...");

term.echo("Selecting previously unselected package libatomic1:amd64.");

term.echo("Preparing to unpack .../076-libatomic1_6.3.0-18_amd64.deb ...");

term.echo("Unpacking libatomic1:amd64 (6.3.0-18) ...");

term.echo("Selecting previously unselected package libasan3:amd64.");

term.echo("Preparing to unpack .../077-libasan3_6.3.0-18_amd64.deb ...");

term.echo("Unpacking libasan3:amd64 (6.3.0-18) ...");

term.echo("Selecting previously unselected package liblsan0:amd64.");

term.echo("Preparing to unpack .../078-liblsan0_6.3.0-18_amd64.deb ...");

term.echo("Unpacking liblsan0:amd64 (6.3.0-18) ...");

term.echo("Selecting previously unselected package libtsan0:amd64.");

term.echo("Preparing to unpack .../079-libtsan0_6.3.0-18_amd64.deb ...");

term.echo("Unpacking libtsan0:amd64 (6.3.0-18) ...");

term.echo("Selecting previously unselected package libubsan0:amd64.");

term.echo("Preparing to unpack .../080-libubsan0_6.3.0-18_amd64.deb ...");

term.echo("Unpacking libubsan0:amd64 (6.3.0-18) ...");

term.echo("Selecting previously unselected package libcilkrts5:amd64.");

term.echo("Preparing to unpack .../081-libcilkrts5_6.3.0-18_amd64.deb ...");

term.echo("Unpacking libcilkrts5:amd64 (6.3.0-18) ...");

term.echo("Selecting previously unselected package libmpx2:amd64.");

term.echo("Preparing to unpack .../082-libmpx2_6.3.0-18_amd64.deb ...");

term.echo("Unpacking libmpx2:amd64 (6.3.0-18) ...");

term.echo("Selecting previously unselected package libquadmath0:amd64.");

term.echo("Preparing to unpack .../083-libquadmath0_6.3.0-18_amd64.deb ...");

term.echo("Unpacking libquadmath0:amd64 (6.3.0-18) ...");

term.echo("Selecting previously unselected package libgcc-6-dev:amd64.");

term.echo("Preparing to unpack .../084-libgcc-6-dev_6.3.0-18_amd64.deb ...");

term.echo("Unpacking libgcc-6-dev:amd64 (6.3.0-18) ...");

term.echo("Selecting previously unselected package gcc-6.");

term.echo("Preparing to unpack .../085-gcc-6_6.3.0-18_amd64.deb ...");

term.echo("Unpacking gcc-6 (6.3.0-18) ...");

term.echo("Selecting previously unselected package gcc.");

term.echo("Preparing to unpack .../086-gcc_4%3a6.3.0-4_amd64.deb ...");

term.echo("Unpacking gcc (4:6.3.0-4) ...");

term.echo("Selecting previously unselected package jailkit.");

term.echo("Preparing to unpack .../087-jailkit_2.19-1_amd64.deb ...");

term.echo("Unpacking jailkit (2.19-1) ...");

term.echo("Selecting previously unselected package javascript-common.");

term.echo("Preparing to unpack .../088-javascript-common_11_all.deb ...");

term.echo("Unpacking javascript-common (11) ...");

term.echo("Selecting previously unselected package php-common.");

term.echo("Preparing to unpack .../089-php-common_1%3a49_all.deb ...");

term.echo("Unpacking php-common (1:49) ...");

term.echo("Selecting previously unselected package php7.0-common.");

term.echo("Preparing to unpack .../090-php7.0-common_7.0.19-1_amd64.deb ...");

term.echo("Unpacking php7.0-common (7.0.19-1) ...");

term.echo("Selecting previously unselected package php7.0-json.");

term.echo("Preparing to unpack .../091-php7.0-json_7.0.19-1_amd64.deb ...");

term.echo("Unpacking php7.0-json (7.0.19-1) ...");

term.echo("Selecting previously unselected package php7.0-opcache.");

term.echo("Preparing to unpack .../092-php7.0-opcache_7.0.19-1_amd64.deb ...");

term.echo("Unpacking php7.0-opcache (7.0.19-1) ...");

term.echo("Selecting previously unselected package php7.0-readline.");

term.echo("Preparing to unpack .../093-php7.0-readline_7.0.19-1_amd64.deb ...");

term.echo("Unpacking php7.0-readline (7.0.19-1) ...");

term.echo("Selecting previously unselected package php7.0-cli.");

term.echo("Preparing to unpack .../094-php7.0-cli_7.0.19-1_amd64.deb ...");

term.echo("Unpacking php7.0-cli (7.0.19-1) ...");

term.echo("Selecting previously unselected package libapache2-mod-php7.0.");

term.echo("Preparing to unpack .../095-libapache2-mod-php7.0_7.0.19-1_amd64.deb ...");

term.echo("Unpacking libapache2-mod-php7.0 (7.0.19-1) ...");

term.echo("Selecting previously unselected package libauthen-sasl-perl.");

term.echo("Preparing to unpack .../096-libauthen-sasl-perl_2.1600-1_all.deb ...");

term.echo("Unpacking libauthen-sasl-perl (2.1600-1) ...");

term.echo("Selecting previously unselected package libberkeleydb-perl.");

term.echo("Preparing to unpack .../097-libberkeleydb-perl_0.55-1;b2_amd64.deb ...");

term.echo("Unpacking libberkeleydb-perl (0.55-1;b2) ...");

term.echo("Selecting previously unselected package libcrypt-random-seed-perl.");

term.echo("Preparing to unpack .../098-libcrypt-random-seed-perl_0.03-1_all.deb ...");

term.echo("Unpacking libcrypt-random-seed-perl (0.03-1) ...");

term.echo("Selecting previously unselected package libmath-random-isaac-perl.");

term.echo("Preparing to unpack .../099-libmath-random-isaac-perl_1.003-1_all.deb ...");

term.echo("Unpacking libmath-random-isaac-perl (1.003-1) ...");

term.echo("Selecting previously unselected package libbytes-random-secure-perl.");

term.echo("Preparing to unpack .../100-libbytes-random-secure-perl_0.28-1_all.deb ...");

term.echo("Unpacking libbytes-random-secure-perl (0.28-1) ...");

term.echo("Selecting previously unselected package libc-dev-bin.");

term.echo("Preparing to unpack .../101-libc-dev-bin_2.24-11;deb9u1_amd64.deb ...");

term.echo("Unpacking libc-dev-bin (2.24-11;deb9u1) ...");

term.echo("Selecting previously unselected package linux-libc-dev:amd64.");

term.echo("Preparing to unpack .../102-linux-libc-dev_4.9.30-2;deb9u3_amd64.deb ...");

term.echo("Unpacking linux-libc-dev:amd64 (4.9.30-2;deb9u3) ...");

term.echo("Selecting previously unselected package libc6-dev:amd64.");

term.echo("Preparing to unpack .../103-libc6-dev_2.24-11;deb9u1_amd64.deb ...");

term.echo("Unpacking libc6-dev:amd64 (2.24-11;deb9u1) ...");

term.echo("Selecting previously unselected package libhtml-tagset-perl.");

term.echo("Preparing to unpack .../104-libhtml-tagset-perl_3.20-3_all.deb ...");

term.echo("Unpacking libhtml-tagset-perl (3.20-3) ...");

term.echo("Selecting previously unselected package liburi-perl.");

term.echo("Preparing to unpack .../105-liburi-perl_1.71-1_all.deb ...");

term.echo("Unpacking liburi-perl (1.71-1) ...");

term.echo("Selecting previously unselected package libhtml-parser-perl.");

term.echo("Preparing to unpack .../106-libhtml-parser-perl_3.72-3_amd64.deb ...");

term.echo("Unpacking libhtml-parser-perl (3.72-3) ...");

term.echo("Selecting previously unselected package libcgi-pm-perl.");

term.echo("Preparing to unpack .../107-libcgi-pm-perl_4.35-1_all.deb ...");

term.echo("Unpacking libcgi-pm-perl (4.35-1) ...");

term.echo("Selecting previously unselected package libfcgi-perl.");

term.echo("Preparing to unpack .../108-libfcgi-perl_0.78-2_amd64.deb ...");

term.echo("Unpacking libfcgi-perl (0.78-2) ...");

term.echo("Selecting previously unselected package libcgi-fast-perl.");

term.echo("Preparing to unpack .../109-libcgi-fast-perl_1%3a2.12-1_all.deb ...");

term.echo("Unpacking libcgi-fast-perl (1:2.12-1) ...");

term.echo("Selecting previously unselected package libcrypt-openssl-bignum-perl.");

term.echo("Preparing to unpack .../110-libcrypt-openssl-bignum-perl_0.07-2_amd64.deb ...");

term.echo("Unpacking libcrypt-openssl-bignum-perl (0.07-2) ...");

term.echo("Selecting previously unselected package libcrypt-openssl-rsa-perl.");

term.echo("Preparing to unpack .../111-libcrypt-openssl-rsa-perl_0.28-5_amd64.deb ...");

term.echo("Unpacking libcrypt-openssl-rsa-perl (0.28-5) ...");

term.echo("Selecting previously unselected package libcrypt-ssleay-perl.");

term.echo("Preparing to unpack .../112-libcrypt-ssleay-perl_0.73.04-2_amd64.deb ...");

term.echo("Unpacking libcrypt-ssleay-perl (0.73.04-2) ...");

term.echo("Selecting previously unselected package libmariadbclient18:amd64.");

term.echo("Preparing to unpack .../113-libmariadbclient18_10.1.23-9;deb9u1_amd64.deb ...");

term.echo("Unpacking libmariadbclient18:amd64 (10.1.23-9;deb9u1) ...");

term.echo("Selecting previously unselected package libdbd-mysql-perl.");

term.echo("Preparing to unpack .../114-libdbd-mysql-perl_4.041-2_amd64.deb ...");

term.echo("Unpacking libdbd-mysql-perl (4.041-2) ...");

term.echo("Selecting previously unselected package libdigest-hmac-perl.");

term.echo("Preparing to unpack .../115-libdigest-hmac-perl_1.03;dfsg-1_all.deb ...");

term.echo("Unpacking libdigest-hmac-perl (1.03;dfsg-1) ...");

term.echo("Selecting previously unselected package libencode-locale-perl.");

term.echo("Preparing to unpack .../116-libencode-locale-perl_1.05-1_all.deb ...");

term.echo("Unpacking libencode-locale-perl (1.05-1) ...");

term.echo("Selecting previously unselected package liberror-perl.");

term.echo("Preparing to unpack .../117-liberror-perl_0.17024-1_all.deb ...");

term.echo("Unpacking liberror-perl (0.17024-1) ...");

term.echo("Selecting previously unselected package libfcgi0ldbl:amd64.");

term.echo("Preparing to unpack .../118-libfcgi0ldbl_2.4.0-8.4;b1_amd64.deb ...");

term.echo("Unpacking libfcgi0ldbl:amd64 (2.4.0-8.4;b1) ...");

term.echo("Selecting previously unselected package libfcgi-bin.");

term.echo("Preparing to unpack .../119-libfcgi-bin_2.4.0-8.4;b1_amd64.deb ...");

term.echo("Unpacking libfcgi-bin (2.4.0-8.4;b1) ...");

term.echo("Selecting previously unselected package libfcgi-dev:amd64.");

term.echo("Preparing to unpack .../120-libfcgi-dev_2.4.0-8.4;b1_amd64.deb ...");

term.echo("Unpacking libfcgi-dev:amd64 (2.4.0-8.4;b1) ...");

term.echo("Selecting previously unselected package libtimedate-perl.");

term.echo("Preparing to unpack .../121-libtimedate-perl_2.3000-2_all.deb ...");

term.echo("Unpacking libtimedate-perl (2.3000-2) ...");

term.echo("Selecting previously unselected package libhttp-date-perl.");

term.echo("Preparing to unpack .../122-libhttp-date-perl_6.02-1_all.deb ...");

term.echo("Unpacking libhttp-date-perl (6.02-1) ...");

term.echo("Selecting previously unselected package libfile-listing-perl.");

term.echo("Preparing to unpack .../123-libfile-listing-perl_6.04-1_all.deb ...");

term.echo("Unpacking libfile-listing-perl (6.04-1) ...");

term.echo("Selecting previously unselected package libfont-afm-perl.");

term.echo("Preparing to unpack .../124-libfont-afm-perl_1.20-2_all.deb ...");

term.echo("Unpacking libfont-afm-perl (1.20-2) ...");

term.echo("Selecting previously unselected package libglib2.0-data.");

term.echo("Preparing to unpack .../125-libglib2.0-data_2.50.3-2_all.deb ...");

term.echo("Unpacking libglib2.0-data (2.50.3-2) ...");

term.echo("Selecting previously unselected package libio-html-perl.");

term.echo("Preparing to unpack .../126-libio-html-perl_1.001-1_all.deb ...");

term.echo("Unpacking libio-html-perl (1.001-1) ...");

term.echo("Selecting previously unselected package liblwp-mediatypes-perl.");

term.echo("Preparing to unpack .../127-liblwp-mediatypes-perl_6.02-1_all.deb ...");

term.echo("Unpacking liblwp-mediatypes-perl (6.02-1) ...");

term.echo("Selecting previously unselected package libhttp-message-perl.");

term.echo("Preparing to unpack .../128-libhttp-message-perl_6.11-1_all.deb ...");

term.echo("Unpacking libhttp-message-perl (6.11-1) ...");

term.echo("Selecting previously unselected package libhtml-form-perl.");

term.echo("Preparing to unpack .../129-libhtml-form-perl_6.03-1_all.deb ...");

term.echo("Unpacking libhtml-form-perl (6.03-1) ...");

term.echo("Selecting previously unselected package libhtml-tree-perl.");

term.echo("Preparing to unpack .../130-libhtml-tree-perl_5.03-2_all.deb ...");

term.echo("Unpacking libhtml-tree-perl (5.03-2) ...");

term.echo("Selecting previously unselected package libhtml-format-perl.");

term.echo("Preparing to unpack .../131-libhtml-format-perl_2.12-1_all.deb ...");

term.echo("Unpacking libhtml-format-perl (2.12-1) ...");

term.echo("Selecting previously unselected package libhtml-template-perl.");

term.echo("Preparing to unpack .../132-libhtml-template-perl_2.95-2_all.deb ...");

term.echo("Unpacking libhtml-template-perl (2.95-2) ...");

term.echo("Selecting previously unselected package libhttp-cookies-perl.");

term.echo("Preparing to unpack .../133-libhttp-cookies-perl_6.01-1_all.deb ...");

term.echo("Unpacking libhttp-cookies-perl (6.01-1) ...");

term.echo("Selecting previously unselected package libhttp-daemon-perl.");

term.echo("Preparing to unpack .../134-libhttp-daemon-perl_6.01-1_all.deb ...");

term.echo("Unpacking libhttp-daemon-perl (6.01-1) ...");

term.echo("Selecting previously unselected package libhttp-negotiate-perl.");

term.echo("Preparing to unpack .../135-libhttp-negotiate-perl_6.00-2_all.deb ...");

term.echo("Unpacking libhttp-negotiate-perl (6.00-2) ...");

term.echo("Selecting previously unselected package libio-multiplex-perl.");

term.echo("Preparing to unpack .../136-libio-multiplex-perl_1.16-1_all.deb ...");

term.echo("Unpacking libio-multiplex-perl (1.16-1) ...");

term.echo("Selecting previously unselected package libsocket6-perl.");

term.echo("Preparing to unpack .../137-libsocket6-perl_0.27-1;b1_amd64.deb ...");

term.echo("Unpacking libsocket6-perl (0.27-1;b1) ...");

term.echo("Selecting previously unselected package libio-socket-inet6-perl.");

term.echo("Preparing to unpack .../138-libio-socket-inet6-perl_2.72-2_all.deb ...");

term.echo("Unpacking libio-socket-inet6-perl (2.72-2) ...");

term.echo("Selecting previously unselected package libio-socket-ssl-perl.");

term.echo("Preparing to unpack .../139-libio-socket-ssl-perl_2.044-1_all.deb ...");

term.echo("Unpacking libio-socket-ssl-perl (2.044-1) ...");

term.echo("Selecting previously unselected package libjs-jquery.");

term.echo("Preparing to unpack .../140-libjs-jquery_3.1.1-2_all.deb ...");

term.echo("Unpacking libjs-jquery (3.1.1-2) ...");

term.echo("Selecting previously unselected package libnet-http-perl.");

term.echo("Preparing to unpack .../141-libnet-http-perl_6.12-1_all.deb ...");

term.echo("Unpacking libnet-http-perl (6.12-1) ...");

term.echo("Selecting previously unselected package libwww-robotrules-perl.");

term.echo("Preparing to unpack .../142-libwww-robotrules-perl_6.01-1_all.deb ...");

term.echo("Unpacking libwww-robotrules-perl (6.01-1) ...");

term.echo("Selecting previously unselected package libwww-perl.");

term.echo("Preparing to unpack .../143-libwww-perl_6.15-1_all.deb ...");

term.echo("Unpacking libwww-perl (6.15-1) ...");

term.echo("Selecting previously unselected package liblwp-protocol-https-perl.");

term.echo("Preparing to unpack .../144-liblwp-protocol-https-perl_6.06-2_all.deb ...");

term.echo("Unpacking liblwp-protocol-https-perl (6.06-2) ...");

term.echo("Selecting previously unselected package libnet-smtp-ssl-perl.");

term.echo("Preparing to unpack .../145-libnet-smtp-ssl-perl_1.04-1_all.deb ...");

term.echo("Unpacking libnet-smtp-ssl-perl (1.04-1) ...");

term.echo("Selecting previously unselected package libmailtools-perl.");

term.echo("Preparing to unpack .../146-libmailtools-perl_2.18-1_all.deb ...");

term.echo("Unpacking libmailtools-perl (2.18-1) ...");

term.echo("Selecting previously unselected package libnet-ip-perl.");

term.echo("Preparing to unpack .../147-libnet-ip-perl_1.26-1_all.deb ...");

term.echo("Unpacking libnet-ip-perl (1.26-1) ...");

term.echo("Selecting previously unselected package libnet-dns-perl.");

term.echo("Preparing to unpack .../148-libnet-dns-perl_1.07-1_all.deb ...");

term.echo("Unpacking libnet-dns-perl (1.07-1) ...");

term.echo("Selecting previously unselected package libmail-dkim-perl.");

term.echo("Preparing to unpack .../149-libmail-dkim-perl_0.40-1_all.deb ...");

term.echo("Unpacking libmail-dkim-perl (0.40-1) ...");

term.echo("Selecting previously unselected package libnetaddr-ip-perl.");

term.echo("Preparing to unpack .../150-libnetaddr-ip-perl_4.079;dfsg-1;b1_amd64.deb ...");

term.echo("Unpacking libnetaddr-ip-perl (4.079;dfsg-1;b1) ...");

term.echo("Selecting previously unselected package libmail-spf-perl.");

term.echo("Preparing to unpack .../151-libmail-spf-perl_2.9.0-4_all.deb ...");

term.echo("Unpacking libmail-spf-perl (2.9.0-4) ...");

term.echo("Selecting previously unselected package libmath-random-isaac-xs-perl.");

term.echo("Preparing to unpack .../152-libmath-random-isaac-xs-perl_1.004-2;b2_amd64.deb ...");

term.echo("Unpacking libmath-random-isaac-xs-perl (1.004-2;b2) ...");

term.echo("Selecting previously unselected package libmcrypt4.");

term.echo("Preparing to unpack .../153-libmcrypt4_2.5.8-3.3_amd64.deb ...");

term.echo("Unpacking libmcrypt4 (2.5.8-3.3) ...");

term.echo("Selecting previously unselected package libmemcached11:amd64.");

term.echo("Preparing to unpack .../154-libmemcached11_1.0.18-4.1_amd64.deb ...");

term.echo("Unpacking libmemcached11:amd64 (1.0.18-4.1) ...");

term.echo("Selecting previously unselected package libmemcachedutil2:amd64.");

term.echo("Preparing to unpack .../155-libmemcachedutil2_1.0.18-4.1_amd64.deb ...");

term.echo("Unpacking libmemcachedutil2:amd64 (1.0.18-4.1) ...");

term.echo("Selecting previously unselected package libnet-cidr-perl.");

term.echo("Preparing to unpack .../156-libnet-cidr-perl_0.18-1_all.deb ...");

term.echo("Unpacking libnet-cidr-perl (0.18-1) ...");

term.echo("Selecting previously unselected package libnet-rblclient-perl.");

term.echo("Preparing to unpack .../157-libnet-rblclient-perl_0.5-3_all.deb ...");

term.echo("Unpacking libnet-rblclient-perl (0.5-3) ...");

term.echo("Selecting previously unselected package libnet-server-perl.");

term.echo("Preparing to unpack .../158-libnet-server-perl_2.008-3_all.deb ...");

term.echo("Unpacking libnet-server-perl (2.008-3) ...");

term.echo("Selecting previously unselected package libnet-xwhois-perl.");

term.echo("Preparing to unpack .../159-libnet-xwhois-perl_0.90-4_all.deb ...");

term.echo("Unpacking libnet-xwhois-perl (0.90-4) ...");

term.echo("Selecting previously unselected package nginx-common.");

term.echo("Preparing to unpack .../160-nginx-common_1.10.3-1;deb9u1_all.deb ...");

term.echo("Unpacking nginx-common (1.10.3-1;deb9u1) ...");

term.echo("Selecting previously unselected package libnginx-mod-http-auth-pam.");

term.echo("Preparing to unpack .../161-libnginx-mod-http-auth-pam_1.10.3-1;deb9u1_amd64.deb ...");

term.echo("Unpacking libnginx-mod-http-auth-pam (1.10.3-1;deb9u1) ...");

term.echo("Selecting previously unselected package libnginx-mod-http-dav-ext.");

term.echo("Preparing to unpack .../162-libnginx-mod-http-dav-ext_1.10.3-1;deb9u1_amd64.deb ...");

term.echo("Unpacking libnginx-mod-http-dav-ext (1.10.3-1;deb9u1) ...");

term.echo("Selecting previously unselected package libnginx-mod-http-echo.");

term.echo("Preparing to unpack .../163-libnginx-mod-http-echo_1.10.3-1;deb9u1_amd64.deb ...");

term.echo("Unpacking libnginx-mod-http-echo (1.10.3-1;deb9u1) ...");

term.echo("Selecting previously unselected package libnginx-mod-http-geoip.");

term.echo("Preparing to unpack .../164-libnginx-mod-http-geoip_1.10.3-1;deb9u1_amd64.deb ...");

term.echo("Unpacking libnginx-mod-http-geoip (1.10.3-1;deb9u1) ...");

term.echo("Selecting previously unselected package libnginx-mod-http-image-filter.");

term.echo("Preparing to unpack .../165-libnginx-mod-http-image-filter_1.10.3-1;deb9u1_amd64.deb ...");

term.echo("Unpacking libnginx-mod-http-image-filter (1.10.3-1;deb9u1) ...");

term.echo("Selecting previously unselected package libnginx-mod-http-subs-filter.");

term.echo("Preparing to unpack .../166-libnginx-mod-http-subs-filter_1.10.3-1;deb9u1_amd64.deb ...");

term.echo("Unpacking libnginx-mod-http-subs-filter (1.10.3-1;deb9u1) ...");

term.echo("Selecting previously unselected package libnginx-mod-http-upstream-fair.");

term.echo("Preparing to unpack .../167-libnginx-mod-http-upstream-fair_1.10.3-1;deb9u1_amd64.deb ...");

term.echo("Unpacking libnginx-mod-http-upstream-fair (1.10.3-1;deb9u1) ...");

term.echo("Selecting previously unselected package libxslt1.1:amd64.");

term.echo("Preparing to unpack .../168-libxslt1.1_1.1.29-2.1_amd64.deb ...");

term.echo("Unpacking libxslt1.1:amd64 (1.1.29-2.1) ...");

term.echo("Selecting previously unselected package libnginx-mod-http-xslt-filter.");

term.echo("Preparing to unpack .../169-libnginx-mod-http-xslt-filter_1.10.3-1;deb9u1_amd64.deb ...");

term.echo("Unpacking libnginx-mod-http-xslt-filter (1.10.3-1;deb9u1) ...");

term.echo("Selecting previously unselected package libnginx-mod-mail.");

term.echo("Preparing to unpack .../170-libnginx-mod-mail_1.10.3-1;deb9u1_amd64.deb ...");

term.echo("Unpacking libnginx-mod-mail (1.10.3-1;deb9u1) ...");

term.echo("Selecting previously unselected package libnginx-mod-stream.");

term.echo("Preparing to unpack .../171-libnginx-mod-stream_1.10.3-1;deb9u1_amd64.deb ...");

term.echo("Unpacking libnginx-mod-stream (1.10.3-1;deb9u1) ...");

term.echo("Selecting previously unselected package libparse-syslog-perl.");

term.echo("Preparing to unpack .../172-libparse-syslog-perl_1.10-2_all.deb ...");

term.echo("Unpacking libparse-syslog-perl (1.10-2) ...");

term.echo("Selecting previously unselected package libsasl2-modules:amd64.");

term.echo("Preparing to unpack .../173-libsasl2-modules_2.1.27~101-g0780600;dfsg-3_amd64.deb ...");

term.echo("Unpacking libsasl2-modules:amd64 (2.1.27~101-g0780600;dfsg-3) ...");

term.echo("Selecting previously unselected package libsys-hostname-long-perl.");

term.echo("Preparing to unpack .../174-libsys-hostname-long-perl_1.5-1_all.deb ...");

term.echo("Unpacking libsys-hostname-long-perl (1.5-1) ...");

term.echo("Selecting previously unselected package libterm-readkey-perl.");

term.echo("Preparing to unpack .../175-libterm-readkey-perl_2.37-1_amd64.deb ...");

term.echo("Unpacking libterm-readkey-perl (2.37-1) ...");

term.echo("Selecting previously unselected package libyaml-0-2:amd64.");

term.echo("Preparing to unpack .../176-libyaml-0-2_0.1.7-2_amd64.deb ...");

term.echo("Unpacking libyaml-0-2:amd64 (0.1.7-2) ...");

term.echo("Selecting previously unselected package make.");

term.echo("Preparing to unpack .../177-make_4.1-9.1_amd64.deb ...");

term.echo("Unpacking make (4.1-9.1) ...");

term.echo("Selecting previously unselected package manpages-dev.");

term.echo("Preparing to unpack .../178-manpages-dev_4.10-2_all.deb ...");

term.echo("Unpacking manpages-dev (4.10-2) ...");

term.echo("Selecting previously unselected package mysql-client.");

term.echo("Preparing to unpack .../179-mysql-client_5.5.9999;default_amd64.deb ...");

term.echo("Unpacking mysql-client (5.5.9999;default) ...");

term.echo("Selecting previously unselected package mysql-server.");

term.echo("Preparing to unpack .../180-mysql-server_5.5.9999;default_amd64.deb ...");

term.echo("Unpacking mysql-server (5.5.9999;default) ...");

term.echo("Selecting previously unselected package nginx-full.");

term.echo("Preparing to unpack .../181-nginx-full_1.10.3-1;deb9u1_amd64.deb ...");

term.echo("Unpacking nginx-full (1.10.3-1;deb9u1) ...");

term.echo("Selecting previously unselected package php7.0-fpm.");

term.echo("Preparing to unpack .../182-php7.0-fpm_7.0.19-1_amd64.deb ...");

term.echo("Unpacking php7.0-fpm (7.0.19-1) ...");

term.echo("Selecting previously unselected package php7.0-cgi.");

term.echo("Preparing to unpack .../183-php7.0-cgi_7.0.19-1_amd64.deb ...");

term.echo("Unpacking php7.0-cgi (7.0.19-1) ...");

term.echo("Selecting previously unselected package php7.0.");

term.echo("Preparing to unpack .../184-php7.0_7.0.19-1_all.deb ...");

term.echo("Unpacking php7.0 (7.0.19-1) ...");

term.echo("Selecting previously unselected package php.");

term.echo("Preparing to unpack .../185-php_1%3a7.0;49_all.deb ...");

term.echo("Unpacking php (1:7.0;49) ...");

term.echo("Selecting previously unselected package php-cgi.");

term.echo("Preparing to unpack .../186-php-cgi_1%3a7.0;49_all.deb ...");

term.echo("Unpacking php-cgi (1:7.0;49) ...");

term.echo("Selecting previously unselected package php-cli.");

term.echo("Preparing to unpack .../187-php-cli_1%3a7.0;49_all.deb ...");

term.echo("Unpacking php-cli (1:7.0;49) ...");

term.echo("Selecting previously unselected package php-fpm.");

term.echo("Preparing to unpack .../188-php-fpm_1%3a7.0;49_all.deb ...");

term.echo("Unpacking php-fpm (1:7.0;49) ...");

term.echo("Selecting previously unselected package php7.0-mbstring.");

term.echo("Preparing to unpack .../189-php7.0-mbstring_7.0.19-1_amd64.deb ...");

term.echo("Unpacking php7.0-mbstring (7.0.19-1) ...");

term.echo("Selecting previously unselected package php-mbstring.");

term.echo("Preparing to unpack .../190-php-mbstring_1%3a7.0;49_all.deb ...");

term.echo("Unpacking php-mbstring (1:7.0;49) ...");

term.echo("Selecting previously unselected package php7.0-mcrypt.");

term.echo("Preparing to unpack .../191-php7.0-mcrypt_7.0.19-1_amd64.deb ...");

term.echo("Unpacking php7.0-mcrypt (7.0.19-1) ...");

term.echo("Selecting previously unselected package php-mcrypt.");

term.echo("Preparing to unpack .../192-php-mcrypt_1%3a7.0;49_all.deb ...");

term.echo("Unpacking php-mcrypt (1:7.0;49) ...");

term.echo("Selecting previously unselected package php7.0-xml.");

term.echo("Preparing to unpack .../193-php7.0-xml_7.0.19-1_amd64.deb ...");

term.echo("Unpacking php7.0-xml (7.0.19-1) ...");

term.echo("Selecting previously unselected package php-xml.");

term.echo("Preparing to unpack .../194-php-xml_1%3a7.0;49_all.deb ...");

term.echo("Unpacking php-xml (1:7.0;49) ...");

term.echo("Selecting previously unselected package php-pear.");

term.echo("Preparing to unpack .../195-php-pear_1%3a1.10.1;submodules;notgz-9_all.deb ...");

term.echo("Unpacking php-pear (1:1.10.1;submodules;notgz-9) ...");

term.echo("Selecting previously unselected package php7.0-mysql.");

term.echo("Preparing to unpack .../196-php7.0-mysql_7.0.19-1_amd64.deb ...");

term.echo("Unpacking php7.0-mysql (7.0.19-1) ...");

term.echo("Selecting previously unselected package postgrey.");

term.echo("Preparing to unpack .../197-postgrey_1.36-3_all.deb ...");

term.echo("Unpacking postgrey (1.36-3) ...");

term.echo("Selecting previously unselected package procmail.");

term.echo("Preparing to unpack .../198-procmail_3.22-25;b1_amd64.deb ...");

term.echo("Unpacking procmail (3.22-25;b1) ...");

term.echo("Selecting previously unselected package procmail-wrapper.");

term.echo("Preparing to unpack .../199-procmail-wrapper_1.0-2_amd64.deb ...");

term.echo("Unpacking procmail-wrapper (1.0-2) ...");

term.echo("Selecting previously unselected package proftpd-basic.");

term.echo("Preparing to unpack .../200-proftpd-basic_1.3.5b-4_amd64.deb ...");

term.echo("Unpacking proftpd-basic (1.3.5b-4) ...");

term.echo("Selecting previously unselected package python3-pyinotify.");

term.echo("Preparing to unpack .../201-python3-pyinotify_0.9.6-1_all.deb ...");

term.echo("Unpacking python3-pyinotify (0.9.6-1) ...");

term.echo("Selecting previously unselected package python3-systemd.");

term.echo("Preparing to unpack .../202-python3-systemd_233-1_amd64.deb ...");

term.echo("Unpacking python3-systemd (233-1) ...");

term.echo("Selecting previously unselected package rubygems-integration.");

term.echo("Preparing to unpack .../203-rubygems-integration_1.11_all.deb ...");

term.echo("Unpacking rubygems-integration (1.11) ...");

term.echo("Selecting previously unselected package ruby-did-you-mean.");

term.echo("Preparing to unpack .../204-ruby-did-you-mean_1.0.0-2_all.deb ...");

term.echo("Unpacking ruby-did-you-mean (1.0.0-2) ...");

term.echo("Selecting previously unselected package ruby-minitest.");

term.echo("Preparing to unpack .../205-ruby-minitest_5.9.0-1_all.deb ...");

term.echo("Unpacking ruby-minitest (5.9.0-1) ...");

term.echo("Selecting previously unselected package ruby-net-telnet.");

term.echo("Preparing to unpack .../206-ruby-net-telnet_0.1.1-2_all.deb ...");

term.echo("Unpacking ruby-net-telnet (0.1.1-2) ...");

term.echo("Selecting previously unselected package ruby-power-assert.");

term.echo("Preparing to unpack .../207-ruby-power-assert_0.3.0-1_all.deb ...");

term.echo("Unpacking ruby-power-assert (0.3.0-1) ...");

term.echo("Selecting previously unselected package ruby-test-unit.");

term.echo("Preparing to unpack .../208-ruby-test-unit_3.1.7-2_all.deb ...");

term.echo("Unpacking ruby-test-unit (3.1.7-2) ...");

term.echo("Selecting previously unselected package libruby2.3:amd64.");

term.echo("Preparing to unpack .../209-libruby2.3_2.3.3-1_amd64.deb ...");

term.echo("Unpacking libruby2.3:amd64 (2.3.3-1) ...");

term.echo("Selecting previously unselected package ruby2.3.");

term.echo("Preparing to unpack .../210-ruby2.3_2.3.3-1_amd64.deb ...");

term.echo("Unpacking ruby2.3 (2.3.3-1) ...");

term.echo("Selecting previously unselected package ruby.");

term.echo("Preparing to unpack .../211-ruby_1%3a2.3.3_amd64.deb ...");

term.echo("Unpacking ruby (1:2.3.3) ...");

term.echo("Selecting previously unselected package rake.");

term.echo("Preparing to unpack .../212-rake_10.5.0-2_all.deb ...");

term.echo("Unpacking rake (10.5.0-2) ...");

term.echo("Selecting previously unselected package re2c.");

term.echo("Preparing to unpack .../213-re2c_0.16-2_amd64.deb ...");

term.echo("Unpacking re2c (0.16-2) ...");

term.echo("Selecting previously unselected package ruby2.3-doc.");

term.echo("Preparing to unpack .../214-ruby2.3-doc_2.3.3-1_all.deb ...");

term.echo("Unpacking ruby2.3-doc (2.3.3-1) ...");

term.echo("Selecting previously unselected package ri.");

term.echo("Preparing to unpack .../215-ri_1%3a2.3.3_all.deb ...");

term.echo("Unpacking ri (1:2.3.3) ...");

term.echo("Selecting previously unselected package spamassassin.");

term.echo("Preparing to unpack .../216-spamassassin_3.4.1-6_all.deb ...");

term.echo("Unpacking spamassassin (3.4.1-6) ...");

term.echo("Selecting previously unselected package sa-compile.");

term.echo("Preparing to unpack .../217-sa-compile_3.4.1-6_all.deb ...");

term.echo("Unpacking sa-compile (3.4.1-6) ...");

term.echo("Selecting previously unselected package db-util.");

term.echo("Preparing to unpack .../218-db-util_5.3.1_all.deb ...");

term.echo("Unpacking db-util (5.3.1) ...");

term.echo("Selecting previously unselected package sasl2-bin.");

term.echo("Preparing to unpack .../219-sasl2-bin_2.1.27~101-g0780600;dfsg-3_amd64.deb ...");

term.echo("Unpacking sasl2-bin (2.1.27~101-g0780600;dfsg-3) ...");

term.echo("Selecting previously unselected package shared-mime-info.");

term.echo("Preparing to unpack .../220-shared-mime-info_1.8-1_amd64.deb ...");

term.echo("Unpacking shared-mime-info (1.8-1) ...");

term.echo("Selecting previously unselected package spamc.");

term.echo("Preparing to unpack .../221-spamc_3.4.1-6;b1_amd64.deb ...");

term.echo("Unpacking spamc (3.4.1-6;b1) ...");

term.echo("Selecting previously unselected package unzip.");

term.echo("Preparing to unpack .../222-unzip_6.0-21_amd64.deb ...");

term.echo("Unpacking unzip (6.0-21) ...");

term.echo("Selecting previously unselected package zip.");

term.echo("Preparing to unpack .../223-zip_3.0-11;b1_amd64.deb ...");

term.echo("Unpacking zip (3.0-11;b1) ...");

term.echo("Selecting previously unselected package postfix-pcre.");

term.echo("Preparing to unpack .../224-postfix-pcre_3.1.4-7_amd64.deb ...");

term.echo("Unpacking postfix-pcre (3.1.4-7) ...");

term.echo("Selecting previously unselected package virtualmin-lemp-stack.");

term.echo("Preparing to unpack .../225-virtualmin-lemp-stack_6.0.2;deb-9_all.deb ...");

term.echo("Unpacking virtualmin-lemp-stack (6.0.2;deb-9) ...");

term.echo("Selecting previously unselected package whois.");

term.echo("Preparing to unpack .../226-whois_5.2.15_amd64.deb ...");

term.echo("Unpacking whois (5.2.15) ...");

term.echo("Selecting previously unselected package xdg-user-dirs.");

term.echo("Preparing to unpack .../227-xdg-user-dirs_0.15-2;b1_amd64.deb ...");

term.echo("Unpacking xdg-user-dirs (0.15-2;b1) ...");

term.echo("Selecting previously unselected package libipset3:amd64.");

term.echo("Preparing to unpack .../228-libipset3_6.30-2_amd64.deb ...");

term.echo("Unpacking libipset3:amd64 (6.30-2) ...");

term.echo("Selecting previously unselected package ipset.");

term.echo("Preparing to unpack .../229-ipset_6.30-2_amd64.deb ...");

term.echo("Unpacking ipset (6.30-2) ...");

term.echo("Selecting previously unselected package libconfig-inifiles-perl.");

term.echo("Preparing to unpack .../230-libconfig-inifiles-perl_2.94-1_all.deb ...");

term.echo("Unpacking libconfig-inifiles-perl (2.94-1) ...");

term.echo("Setting up libquadmath0:amd64 (6.3.0-18) ...");

term.echo("Setting up ruby2.3-doc (2.3.3-1) ...");

term.echo("Setting up bind9utils (1:9.10.3.dfsg.P4-12.3;deb9u2) ...");

term.echo("Setting up libhtml-tagset-perl (3.20-3) ...");

term.echo("Setting up libgomp1:amd64 (6.3.0-18) ...");

term.echo("Setting up postfix-pcre (3.1.4-7) ...");

term.echo("Adding pcre map entry to /etc/postfix/dynamicmaps.cf");

term.echo("Setting up libjs-jquery (3.1.1-2) ...");

term.echo("Setting up libatomic1:amd64 (6.3.0-18) ...");

term.echo("Setting up libapr1:amd64 (1.5.2-5) ...");

term.echo("Setting up libllvm3.8:amd64 (1:3.8.1-24) ...");

term.echo("Setting up fail2ban (0.9.6-2) ...");

term.echo("Created symlink /etc/systemd/system/multi-user.target.wants/fail2ban.service → /lib/systemd/system/fail2ban.service.");

term.echo("Setting up clamav-docs (0.99.2;dfsg-6) ...");

term.echo("Setting up procmail (3.22-25;b1) ...");

term.echo("Setting up libtfm1:amd64 (0.13-4) ...");

term.echo("Setting up libmath-random-isaac-xs-perl (1.004-2;b2) ...");

term.echo("Setting up libcc1-0:amd64 (6.3.0-18) ...");

term.echo("Setting up libfont-afm-perl (1.20-2) ...");

term.echo("Setting up make (4.1-9.1) ...");

term.echo("Setting up libasan3:amd64 (6.3.0-18) ...");

term.echo("Setting up clamav-base (0.99.2;dfsg-6) ...");

term.echo("Setting up libjpeg62-turbo:amd64 (1:1.5.1-2) ...");

term.echo("Setting up libconfig-inifiles-perl (2.94-1) ...");

term.echo("Setting up libmspack0:amd64 (0.5-1;b2) ...");

term.echo("Setting up libnghttp2-14:amd64 (1.18.1-1) ...");

term.echo("Processing triggers for mime-support (3.60) ...");

term.echo("Setting up python3-selinux (2.6-3;b1) ...");

term.echo("Setting up libencode-locale-perl (1.05-1) ...");

term.echo("Setting up libfcgi0ldbl:amd64 (2.4.0-8.4;b1) ...");

term.echo("Setting up libjemalloc1 (3.6.0-9.1) ...");

term.echo("Setting up libpng16-16:amd64 (1.6.28-1) ...");

term.echo("Setting up liberror-perl (0.17024-1) ...");

term.echo("Setting up libtimedate-perl (2.3000-2) ...");

term.echo("Setting up libnet-ip-perl (1.26-1) ...");

term.echo("Setting up libjbig0:amd64 (2.1-3.1;b2) ...");

term.echo("Setting up fonts-dejavu-core (2.37-1) ...");

term.echo("Setting up libparse-syslog-perl (1.10-2) ...");

term.echo("Setting up jailkit (2.19-1) ...");

term.echo("Setting up libcilkrts5:amd64 (6.3.0-18) ...");

term.echo("Setting up re2c (0.16-2) ...");

term.echo("Setting up socat (1.7.3.1-2;deb9u1) ...");

term.echo("Setting up libjson-c3:amd64 (0.12.1-1.1) ...");

term.echo("Setting up libcrypt-random-seed-perl (0.03-1) ...");

term.echo("Setting up libcrypt-openssl-bignum-perl (0.07-2) ...");

term.echo("Setting up libubsan0:amd64 (6.3.0-18) ...");

term.echo("Setting up libtsan0:amd64 (6.3.0-18) ...");

term.echo("Setting up libglib2.0-0:amd64 (2.50.3-2) ...");

term.echo("No schema files found: doing nothing.");

term.echo("Setting up nginx-common (1.10.3-1;deb9u1) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("Created symlink /etc/systemd/system/multi-user.target.wants/nginx.service → /lib/systemd/system/nginx.service.");

term.echo("Setting up libio-html-perl (1.001-1) ...");

term.echo("Setting up libnginx-mod-http-subs-filter (1.10.3-1;deb9u1) ...");

term.echo("Setting up libmath-random-isaac-perl (1.003-1) ...");

term.echo("Setting up python3-six (1.10.0-3) ...");

term.echo("Setting up unzip (6.0-21) ...");

term.echo("Setting up linux-libc-dev:amd64 (4.9.30-2;deb9u3) ...");

term.echo("Setting up whois (5.2.15) ...");

term.echo("Setting up apache2-data (2.4.25-3;deb9u2) ...");

term.echo("Setting up libtiff5:amd64 (4.0.8-2;deb9u1) ...");

term.echo("Setting up libstemmer0d:amd64 (0;svn585-1;b2) ...");

term.echo("Setting up libmariadbclient18:amd64 (10.1.23-9;deb9u1) ...");

term.echo("Setting up librtmp1:amd64 (2.4;20151223.gitfa8646d.1-1;b1) ...");

term.echo("Processing triggers for sgml-base (1.29) ...");

term.echo("Setting up libmemcached11:amd64 (1.0.18-4.1) ...");

term.echo("Setting up libipset3:amd64 (6.30-2) ...");

term.echo("Setting up python3-slip (0.6.1-3) ...");

term.echo("Setting up libgirepository-1.0-1:amd64 (1.50.0-1;b1) ...");

term.echo("Setting up libio-socket-ssl-perl (2.044-1) ...");

term.echo("Setting up zip (3.0-11;b1) ...");

term.echo("Setting up libirs141:amd64 (1:9.10.3.dfsg.P4-12.3;deb9u2) ...");

term.echo("Setting up libterm-readkey-perl (2.37-1) ...");

term.echo("Setting up libfreetype6:amd64 (2.6.3-3.2) ...");

term.echo("Setting up libmagic-mgc (1:5.30-1) ...");

term.echo("Setting up libmagic1:amd64 (1:5.30-1) ...");

term.echo("Setting up liblsan0:amd64 (6.3.0-18) ...");

term.echo("Setting up fonts-lato (2.0-1) ...");

term.echo("Setting up libxslt1.1:amd64 (1.1.29-2.1) ...");

term.echo("Setting up libio-multiplex-perl (1.16-1) ...");

term.echo("Setting up libsys-hostname-long-perl (1.5-1) ...");

term.echo("Setting up libcrypt-openssl-rsa-perl (0.28-5) ...");

term.echo("Setting up ruby-did-you-mean (1.0.0-2) ...");

term.echo("Setting up libmpx2:amd64 (6.3.0-18) ...");

term.echo("Setting up libisl15:amd64 (0.18-1) ...");

term.echo("Setting up libyaml-0-2:amd64 (0.1.7-2) ...");

term.echo("Setting up libnetaddr-ip-perl (4.079;dfsg-1;b1) ...");

term.echo("Setting up gir1.2-glib-2.0:amd64 (1.50.0-1;b1) ...");

term.echo("Setting up libssh2-1:amd64 (1.7.0-1) ...");

term.echo("Setting up libglib2.0-data (2.50.3-2) ...");

term.echo("Setting up liblwp-mediatypes-perl (6.02-1) ...");

term.echo("Processing triggers for libc-bin (2.24-11;deb9u1) ...");

term.echo("Setting up procmail-wrapper (1.0-2) ...");

term.echo("Setting up libaio1:amd64 (0.3.110-3) ...");

term.echo("Setting up ntpdate (1:4.2.8p10;dfsg-3) ...");

term.echo("Setting up libsocket6-perl (0.27-1;b1) ...");

term.echo("Setting up libnet-xwhois-perl (0.90-4) ...");

term.echo("Setting up galera-3 (25.3.19-2) ...");

term.echo("Setting up liburi-perl (1.71-1) ...");

term.echo("Setting up python3-systemd (233-1) ...");

term.echo("Setting up libexttextcat-data (3.4.4-2) ...");

term.echo("Setting up libaprutil1:amd64 (1.5.4-3) ...");

term.echo("Setting up libnet-cidr-perl (0.18-1) ...");

term.echo("Setting up ipset (6.30-2) ...");

term.echo("Setting up php-common (1:49) ...");

term.echo("Created symlink /etc/systemd/system/timers.target.wants/phpsessionclean.timer → /lib/systemd/system/phpsessionclean.timer.");

term.echo("Processing triggers for systemd (232-25;deb9u1) ...");

term.echo("Setting up libltdl7:amd64 (2.4.6-2) ...");

term.echo("Setting up libhtml-parser-perl (3.72-3) ...");

term.echo("Setting up libnginx-mod-http-auth-pam (1.10.3-1;deb9u1) ...");

term.echo("Setting up ebtables (2.0.10.4-3.5;b1) ...");

term.echo("Created symlink /etc/systemd/system/multi-user.target.wants/ebtables.service → /lib/systemd/system/ebtables.service.");

term.echo("update-rc.d: warning: start and stop actions are no longer supported; falling back to defaults");

term.echo("Setting up ruby-net-telnet (0.1.1-2) ...");

term.echo("Setting up libfcgi-dev:amd64 (2.4.0-8.4;b1) ...");

term.echo("Setting up libcgi-pm-perl (4.35-1) ...");

term.echo("Setting up libnginx-mod-http-dav-ext (1.10.3-1;deb9u1) ...");

term.echo("Setting up db5.3-util (5.3.28-12;b1) ...");

term.echo("Setting up libdigest-hmac-perl (1.03;dfsg-1) ...");

term.echo("Setting up libnginx-mod-mail (1.10.3-1;deb9u1) ...");

term.echo("Setting up shared-mime-info (1.8-1) ...");

term.echo("Setting up libnet-http-perl (6.12-1) ...");

term.echo("Setting up libnginx-mod-http-xslt-filter (1.10.3-1;deb9u1) ...");

term.echo("Setting up libfcgi-bin (2.4.0-8.4;b1) ...");

term.echo("Setting up libmpc3:amd64 (1.0.3-1;b2) ...");

term.echo("Setting up binutils (2.28-5) ...");

term.echo("Setting up cpp-6 (6.3.0-18) ...");

term.echo("Setting up libc-dev-bin (2.24-11;deb9u1) ...");

term.echo("Setting up liblua5.2-0:amd64 (5.2.4-1.1;b2) ...");

term.echo("Setting up libnginx-mod-http-upstream-fair (1.10.3-1;deb9u1) ...");

term.echo("Setting up libxdmcp6:amd64 (1:1.1.2-3) ...");

term.echo("Setting up javascript-common (11) ...");

term.echo("Package apache2 is not configured yet. Will defer actions by package javascript-common.");

term.echo("Processing triggers for dbus (1.10.18-1) ...");

term.echo("Setting up php7.0-common (7.0.19-1) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/calendar.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/ctype.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/exif.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/fileinfo.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/ftp.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/gettext.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/iconv.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/pdo.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/phar.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/posix.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/shmop.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/sockets.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/sysvmsg.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/sysvsem.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/sysvshm.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/tokenizer.ini with new version");

term.echo("Setting up libreadline5:amd64 (5.2;dfsg-3;b1) ...");

term.echo("Setting up libsasl2-modules:amd64 (2.1.27~101-g0780600;dfsg-3) ...");

term.echo("Setting up php7.0-xml (7.0.19-1) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/dom.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/simplexml.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/wddx.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/xml.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/xmlreader.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/xmlwriter.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/xsl.ini with new version");

term.echo("Setting up ruby-minitest (5.9.0-1) ...");

term.echo("Setting up libberkeleydb-perl (0.55-1;b2) ...");

term.echo("Setting up ca-certificates (20161130;nmu1) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("Updating certificates in /etc/ssl/certs...");

term.echo("166 added, 0 removed; done.");

term.echo("Setting up manpages-dev (4.10-2) ...");

term.echo("Setting up libc6-dev:amd64 (2.24-11;deb9u1) ...");

term.echo("Setting up python3-decorator (4.0.11-1) ...");

term.echo("Setting up clamdscan (0.99.2;dfsg-6;b1) ...");

term.echo("Setting up awstats (7.6;dfsg-1) ...");

term.echo("Setting up libfcgi-perl (0.78-2) ...");

term.echo("Setting up xdg-user-dirs (0.15-2;b1) ...");

term.echo("Setting up spamc (3.4.1-6;b1) ...");

term.echo("Setting up libwww-robotrules-perl (6.01-1) ...");

term.echo("Setting up libnginx-mod-http-geoip (1.10.3-1;deb9u1) ...");

term.echo("Setting up clamav-testfiles (0.99.2;dfsg-6) ...");

term.echo("Setting up libmcrypt4 (2.5.8-3.3) ...");

term.echo("Setting up libauthen-sasl-perl (2.1600-1) ...");

term.echo("Setting up libdbi-perl (1.636-1;b1) ...");

term.echo("Setting up libitm1:amd64 (6.3.0-18) ...");

term.echo("Setting up libx11-data (2:1.6.4-3) ...");

term.echo("Setting up libxau6:amd64 (1:1.0.8-1) ...");

term.echo("Setting up libpolkit-gobject-1-0:amd64 (0.105-18) ...");

term.echo("Setting up liblzo2-2:amd64 (2.08-1.2;b2) ...");

term.echo("Setting up python3-pyinotify (0.9.6-1) ...");

term.echo("Setting up ruby-power-assert (0.3.0-1) ...");

term.echo("Setting up libaprutil1-ldap:amd64 (1.5.4-3) ...");

term.echo("Setting up libwebp6:amd64 (0.5.2-1) ...");

term.echo("Setting up php7.0-mysql (7.0.19-1) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/mysqlnd.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/mysqli.ini with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/pdo_mysql.ini with new version");

term.echo("Setting up cpp (4:6.3.0-4) ...");

term.echo("Setting up libbytes-random-secure-perl (0.28-1) ...");

term.echo("Setting up fontconfig-config (2.11.0-6.7) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("Setting up libhttp-date-perl (6.02-1) ...");

term.echo("Setting up php7.0-readline (7.0.19-1) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/readline.ini with new version");

term.echo("Setting up libgcc-6-dev:amd64 (6.3.0-18) ...");

term.echo("Setting up libnet-smtp-ssl-perl (1.04-1) ...");

term.echo("Setting up php7.0-opcache (7.0.19-1) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/opcache.ini with new version");

term.echo("Setting up libnginx-mod-stream (1.10.3-1;deb9u1) ...");

term.echo("Setting up mariadb-server-core-10.1 (10.1.23-9;deb9u1) ...");

term.echo("Setting up php7.0-mbstring (7.0.19-1) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/mbstring.ini with new version");

term.echo("Setting up libhtml-template-perl (2.95-2) ...");

term.echo("Setting up libio-socket-inet6-perl (2.72-2) ...");

term.echo("Setting up ruby-test-unit (3.1.7-2) ...");

term.echo("Setting up libaprutil1-dbd-sqlite3:amd64 (1.5.4-3) ...");

term.echo("Setting up libcurl3:amd64 (7.52.1-5) ...");

term.echo("Setting up libarchive13:amd64 (3.2.2-2) ...");

term.echo("Setting up libdbus-glib-1-2:amd64 (0.108-2) ...");

term.echo("Setting up libexttextcat-2.0-0:amd64 (3.4.4-2;b1) ...");

term.echo("Setting up libnginx-mod-http-echo (1.10.3-1;deb9u1) ...");

term.echo("Setting up apache2-utils (2.4.25-3;deb9u2) ...");

term.echo("Setting up libpolkit-agent-1-0:amd64 (0.105-18) ...");

term.echo("Setting up mariadb-client-core-10.1 (10.1.23-9;deb9u1) ...");

term.echo("Setting up libclamav7:amd64 (0.99.2;dfsg-6;b1) ...");

term.echo("Setting up libmemcachedutil2:amd64 (1.0.18-4.1) ...");

term.echo("Setting up bind9 (1:9.10.3.dfsg.P4-12.3;deb9u2) ...");

term.echo("");

term.echo("Configuration file /etc/init.d/bind9");

term.echo(" ==> File on system created by you or by a script.");

term.echo(" ==> File also in package provided by package maintainer.");

term.echo(" ==> Keeping old config file as default.");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("Adding group bind (GID 117) ...");

term.echo("Done.");

term.echo("Adding system user bind (UID 110) ...");

term.echo("Adding new user bind (UID 110) with group bind ...");

term.echo("Not creating home directory /var/cache/bind.");

term.echo("wrote key file /etc/bind/rndc.key");

term.echo("#");

term.echo("Created symlink /etc/systemd/system/multi-user.target.wants/bind9.service → /lib/systemd/system/bind9.service.");

term.echo("insserv: warning: current start runlevel(s) (empty) of script bind9 overrides LSB defaults (2 3 4 5).");

term.echo("insserv: warning: current stop runlevel(s) (0 1 2 3 4 5 6) of script bind9 overrides LSB defaults (0 1 6).");

term.echo("Setting up apache2-bin (2.4.25-3;deb9u2) ...");

term.echo("Setting up php7.0-mcrypt (7.0.19-1) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/mcrypt.ini with new version");

term.echo("Setting up proftpd-basic (1.3.5b-4) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("Warning: The home dir /run/proftpd you specified cant be accessed: No such file or directory");

term.echo("Adding system user proftpd (UID 111) ...");

term.echo("Adding new user proftpd (UID 111) with group nogroup ...");

term.echo("Not creating home directory /run/proftpd.");

term.echo("Adding system user ftp (UID 112) ...");

term.echo("Adding new user ftp (UID 112) with group nogroup ...");

term.echo("Creating home directory /srv/ftp ...");

term.echo("/usr/share/proftpd/templates/welcome.msg -> /srv/ftp/welcome.msg.proftpd-new");

term.echo("Setting up python3-gi (3.22.0-2) ...");

term.echo("Setting up libnet-dns-perl (1.07-1) ...");

term.echo("Setting up libnet-server-perl (2.008-3) ...");

term.echo("Setting up php-xml (1:7.0;49) ...");

term.echo("Setting up libcgi-fast-perl (1:2.12-1) ...");

term.echo("Setting up libhtml-tree-perl (5.03-2) ...");

term.echo("Setting up gcc-6 (6.3.0-18) ...");

term.echo("Setting up db-util (5.3.1) ...");

term.echo("Setting up sasl2-bin (2.1.27~101-g0780600;dfsg-3) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("Setting up libpolkit-backend-1-0:amd64 (0.105-18) ...");

term.echo("Setting up php-mbstring (1:7.0;49) ...");

term.echo("Setting up php7.0-json (7.0.19-1) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/mods-available/json.ini with new version");

term.echo("Setting up libmail-spf-perl (2.9.0-4) ...");

term.echo("Setting up libfile-listing-perl (6.04-1) ...");

term.echo("Setting up rubygems-integration (1.11) ...");

term.echo("Setting up libhttp-message-perl (6.11-1) ...");

term.echo("Setting up php-mcrypt (1:7.0;49) ...");

term.echo("Setting up libdbd-mysql-perl (4.041-2) ...");

term.echo("Setting up libcrypt-ssleay-perl (0.73.04-2) ...");

term.echo("Setting up libxcb1:amd64 (1.12-1) ...");

term.echo("Setting up libhttp-negotiate-perl (6.00-2) ...");

term.echo("Setting up dovecot-core (1:2.2.27-3;deb9u1) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/dovecot.conf with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/dovecot-dict-auth.conf.ext with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/dovecot-dict-sql.conf.ext with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/dovecot-sql.conf.ext with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/10-auth.conf with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/10-director.conf with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/10-logging.conf with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/10-mail.conf with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/10-master.conf with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/10-tcpwrapper.conf with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/15-lda.conf with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/15-mailboxes.conf with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/90-acl.conf with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/90-plugin.conf with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/90-quota.conf with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/auth-checkpassword.conf.ext with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/auth-deny.conf.ext with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/auth-dict.conf.ext with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/auth-master.conf.ext with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/auth-passwdfile.conf.ext with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/auth-sql.conf.ext with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/auth-static.conf.ext with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/auth-system.conf.ext with new version");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/auth-vpopmail.conf.ext with new version");

term.echo("Created symlink /etc/systemd/system/multi-user.target.wants/dovecot.service → /lib/systemd/system/dovecot.service.");

term.echo("Setting up libfontconfig1:amd64 (2.11.0-6.7;b1) ...");

term.echo("Setting up mariadb-client-10.1 (10.1.23-9;deb9u1) ...");

term.echo("Setting up libmailtools-perl (2.18-1) ...");

term.echo("Setting up libhtml-format-perl (2.12-1) ...");

term.echo("Setting up clamav-freshclam (0.99.2;dfsg-6;b1) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("Created symlink /etc/systemd/system/multi-user.target.wants/clamav-freshclam.service → /lib/systemd/system/clamav-freshclam.service.");

term.echo("Setting up python3-dbus (1.2.4-1;b1) ...");

term.echo("Setting up apache2 (2.4.25-3;deb9u2) ...");

term.echo("Enabling module mpm_event.");

term.echo("Enabling module authz_core.");

term.echo("Enabling module authz_host.");

term.echo("Enabling module authn_core.");

term.echo("Enabling module auth_basic.");

term.echo("Enabling module access_compat.");

term.echo("Enabling module authn_file.");

term.echo("Enabling module authz_user.");

term.echo("Enabling module alias.");

term.echo("Enabling module dir.");

term.echo("Enabling module autoindex.");

term.echo("Enabling module env.");

term.echo("Enabling module mime.");

term.echo("Enabling module negotiation.");

term.echo("Enabling module setenvif.");

term.echo("Enabling module filter.");

term.echo("Enabling module deflate.");

term.echo("Enabling module status.");

term.echo("Enabling module reqtimeout.");

term.echo("Enabling conf charset.");

term.echo("Enabling conf localized-error-pages.");

term.echo("Enabling conf other-vhosts-access-log.");

term.echo("Enabling conf security.");

term.echo("Enabling conf serve-cgi-bin.");

term.echo("Enabling site 000-default.");

term.echo("info: Executing deferred a2enconf javascript-common for package javascript-common");

term.echo("Enabling conf javascript-common.");

term.echo("Created symlink /etc/systemd/system/multi-user.target.wants/apache2.service → /lib/systemd/system/apache2.service.");

term.echo("Created symlink /etc/systemd/system/multi-user.target.wants/apache-htcacheclean.service → /lib/systemd/system/apache-htcacheclean.service.");

term.echo("insserv: warning: current start runlevel(s) (empty) of script apache-htcacheclean overrides LSB defaults (2 3 4 5).");

term.echo("insserv: warning: current stop runlevel(s) (0 1 2 3 4 5 6) of script apache-htcacheclean overrides LSB defaults (0 1 6).");

term.echo("Setting up libhttp-cookies-perl (6.01-1) ...");

term.echo("Setting up libnet-rblclient-perl (0.5-3) ...");

term.echo("Setting up policykit-1 (0.105-18) ...");

term.echo("Removed /run/systemd/system/polkit.service.");

term.echo("polkit.service is a disabled or a static unit not running, not starting it.");

term.echo("Setting up libx11-6:amd64 (2:1.6.4-3) ...");

term.echo("Setting up libhttp-daemon-perl (6.01-1) ...");

term.echo("Setting up gcc (4:6.3.0-4) ...");

term.echo("Setting up php7.0-cli (7.0.19-1) ...");

term.echo("update-alternatives: using /usr/bin/php7.0 to provide /usr/bin/php (php) in auto mode");

term.echo("update-alternatives: using /usr/bin/phar7.0 to provide /usr/bin/phar (phar) in auto mode");

term.echo("update-alternatives: using /usr/bin/phar.phar7.0 to provide /usr/bin/phar.phar (phar.phar) in auto mode");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/cli/php.ini with new version");

term.echo("Setting up postgrey (1.36-3) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("Warning: The home dir /var/lib/postgrey you specified cant be accessed: No such file or directory");

term.echo("Adding system user postgrey (UID 115) ...");

term.echo("Adding new group postgrey (GID 120) ...");

term.echo("Adding new user postgrey (UID 115) with group postgrey ...");

term.echo("Not creating home directory /var/lib/postgrey.");

term.echo("");

term.echo("Creating config file /etc/postgrey/whitelist_clients with new version");

term.echo("");

term.echo("Creating config file /etc/postgrey/whitelist_recipients with new version");

term.echo("");

term.echo("Creating config file /etc/default/postgrey with new version");

term.echo("Setting up php7.0-fpm (7.0.19-1) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/fpm/php.ini with new version");

term.echo("NOTICE: Not enabling PHP 7.0 FPM by default.");

term.echo("NOTICE: To enable PHP 7.0 FPM in Apache2 do:");

term.echo("NOTICE: a2enmod proxy_fcgi setenvif");

term.echo("NOTICE: a2enconf php7.0-fpm");

term.echo("NOTICE: You are seeing this message because you have apache2 package installed.");

term.echo("Created symlink /etc/systemd/system/multi-user.target.wants/php7.0-fpm.service → /lib/systemd/system/php7.0-fpm.service.");

term.echo("Setting up php-cli (1:7.0;49) ...");

term.echo("Setting up clamav (0.99.2;dfsg-6;b1) ...");

term.echo("Setting up clamav-daemon (0.99.2;dfsg-6;b1) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("Created symlink /etc/systemd/system/multi-user.target.wants/clamav-daemon.service → /lib/systemd/system/clamav-daemon.service.");

term.echo("Setting up python3-slip-dbus (0.6.1-3) ...");

term.echo("Setting up php-fpm (1:7.0;49) ...");

term.echo("Setting up dovecot-pop3d (1:2.2.27-3;deb9u1) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/20-pop3.conf with new version");

term.echo("Setting up dovecot-imapd (1:2.2.27-3;deb9u1) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/dovecot/conf.d/20-imap.conf with new version");

term.echo("Setting up php-pear (1:1.10.1;submodules;notgz-9) ...");

term.echo("Setting up libhtml-form-perl (6.03-1) ...");

term.echo("Setting up libmail-dkim-perl (0.40-1) ...");

term.echo("Setting up libxpm4:amd64 (1:3.5.12-1) ...");

term.echo("Setting up mariadb-server-10.1 (10.1.23-9;deb9u1) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("Created symlink /etc/systemd/system/mysql.service → /lib/systemd/system/mariadb.service.");

term.echo("Created symlink /etc/systemd/system/mysqld.service → /lib/systemd/system/mariadb.service.");

term.echo("Created symlink /etc/systemd/system/multi-user.target.wants/mariadb.service → /lib/systemd/system/mariadb.service.");

term.echo("Setting up default-mysql-client (1.0.2) ...");

term.echo("Setting up default-mysql-server (1.0.2) ...");

term.echo("Setting up mysql-server (5.5.9999;default) ...");

term.echo("Setting up php7.0 (7.0.19-1) ...");

term.echo("Setting up php7.0-cgi (7.0.19-1) ...");

term.echo("update-alternatives: using /usr/bin/php-cgi7.0 to provide /usr/bin/php-cgi (php-cgi) in auto mode");

term.echo("update-alternatives: using /usr/lib/cgi-bin/php7.0 to provide /usr/lib/cgi-bin/php (php-cgi-bin) in auto mode");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/cgi/php.ini with new version");

term.echo("Setting up libapache2-mod-php7.0 (7.0.19-1) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("");

term.echo("Creating config file /etc/php/7.0/apache2/php.ini with new version");

term.echo("Module mpm_event disabled.");

term.echo("Enabling module mpm_prefork.");

term.echo("apache2_switch_mpm Switch to prefork");

term.echo("apache2_invoke: Enable module php7.0");

term.echo("Setting up php-cgi (1:7.0;49) ...");

term.echo("Setting up libgd3:amd64 (2.2.4-2) ...");

term.echo("Setting up mysql-client (5.5.9999;default) ...");

term.echo("Setting up firewalld (0.4.4.2-1) ...");

term.echo("Created symlink /etc/systemd/system/dbus-org.fedoraproject.FirewallD1.service → /lib/systemd/system/firewalld.service.");

term.echo("Created symlink /etc/systemd/system/multi-user.target.wants/firewalld.service → /lib/systemd/system/firewalld.service.");

term.echo("Setting up php (1:7.0;49) ...");

term.echo("Setting up webalizer (2.23.08-1;b3) ...");

term.echo("locale: Cannot set LC_CTYPE to default locale: No such file or directory");

term.echo("locale: Cannot set LC_MESSAGES to default locale: No such file or directory");

term.echo("locale: Cannot set LC_ALL to default locale: No such file or directory");

term.echo("/var/www/webalizer created");

term.echo("Setting up libnginx-mod-http-image-filter (1.10.3-1;deb9u1) ...");

term.echo("Setting up nginx-full (1.10.3-1;deb9u1) ...");

term.echo("Job for nginx.service failed because the control process exited with error code.");

term.echo("See systemctl status nginx.service and journalctl -xe for details.");

term.echo("invoke-rc.d: initscript nginx, action start failed.");

term.echo("● nginx.service - A high performance web server and a reverse proxy server");

term.echo("   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)");

term.echo("   Active: failed (Result: exit-code) since Sat 2017-08-12 12:49:36 AEST; 21ms ago");

term.echo("     Docs: man:nginx(8)");

term.echo("  Process: 6104 ExecStart=/usr/sbin/nginx -g daemon on; master_process on; (code=exited, status=1/FAILURE)");

term.echo("  Process: 6101 ExecStartPre=/usr/sbin/nginx -t -q -g daemon on; master_process on; (code=exited, status=0/SUCCESS)");

term.echo("");

term.echo("Aug 12 12:49:34 host nginx[6104]: nginx: [emerg] bind() to 0.0.0.0:80 failed…use)");

term.echo("Aug 12 12:49:34 host nginx[6104]: nginx: [emerg] bind() to 0.0.0.0:80 failed…use)");

term.echo("Aug 12 12:49:35 host nginx[6104]: nginx: [emerg] bind() to 0.0.0.0:80 failed…use)");

term.echo("Aug 12 12:49:35 host nginx[6104]: nginx: [emerg] bind() to 0.0.0.0:80 failed…use)");

term.echo("Aug 12 12:49:36 host nginx[6104]: nginx: [emerg] bind() to 0.0.0.0:80 failed…use)");

term.echo("Aug 12 12:49:36 host nginx[6104]: nginx: [emerg] still could not bind()");

term.echo("Aug 12 12:49:36 host systemd[1]: nginx.service: Control process exited, code…us=1");

term.echo("Aug 12 12:49:36 host systemd[1]: Failed to start A high performance web serv…ver.");

term.echo("Aug 12 12:49:36 host systemd[1]: nginx.service: Unit entered failed state.");

term.echo("Aug 12 12:49:36 host systemd[1]: nginx.service: Failed with result exit-code.");

term.echo("Hint: Some lines were ellipsized, use -l to show in full.");

term.echo("dpkg: error processing package nginx-full (--configure):");

term.echo(" subprocess installed post-installation script returned error exit status 1");

term.echo("dpkg: dependency problems prevent configuration of virtualmin-lemp-stack:");

term.echo(" virtualmin-lemp-stack depends on nginx-full; however:");

term.echo("  Package nginx-full is not configured yet.");

term.echo("");

term.echo("dpkg: error processing package virtualmin-lemp-stack (--configure):");

term.echo(" dependency problems - leaving unconfigured");

term.echo("Setting up rake (10.5.0-2) ...");

term.echo("Setting up liblwp-protocol-https-perl (6.06-2) ...");

term.echo("Setting up libruby2.3:amd64 (2.3.3-1) ...");

term.echo("Setting up libwww-perl (6.15-1) ...");

term.echo("Setting up spamassassin (3.4.1-6) ...");

term.echo("Adding system user gentoo-spamd (UID 116) ...");

term.echo("Adding new group gentoo-spamd (GID 121) ...");

term.echo("Adding new user gentoo-spamd (UID 116) with group gentoo-spamd ...");

term.echo("Creating home directory /var/lib/spamassassin ...");

term.echo("Setting up ruby2.3 (2.3.3-1) ...");

term.echo("Setting up sa-compile (3.4.1-6) ...");

term.echo("Running sa-compile (may take a long time)");

term.echo("Setting up ruby (1:2.3.3) ...");

term.echo("Setting up ri (1:2.3.3) ...");

term.echo("Processing triggers for libc-bin (2.24-11;deb9u1) ...");

term.echo("Processing triggers for systemd (232-25;deb9u1) ...");

term.echo("Processing triggers for ca-certificates (20161130;nmu1) ...");

term.echo("Updating certificates in /etc/ssl/certs...");

term.echo("0 added, 0 removed; done.");

term.echo("Running hooks in /etc/ca-certificates/update.d...");

term.echo("done.");

term.echo("Processing triggers for dbus (1.10.18-1) ...");

term.echo("Processing triggers for dovecot-core (1:2.2.27-3;deb9u1) ...");

term.echo("Errors were encountered while processing:");

term.echo(" nginx-full");

term.echo(" virtualmin-lemp-stack");

term.echo("E: Sub-process /usr/bin/dpkg returned an error code (1)");

term.echo("Installing OS packages that Virtualmin needs: Failed with error: 100");

term.echo("[2017-08-12 12:50:46 AEST] [ERROR] Something went wrong with the previous command. Exiting.");


term.echo("FAIL !   FAIL !   FAIL !   FAIL !   FAIL !   FAIL !   FAIL !   FAIL !   FAIL !   FAIL !   FAIL !   FAIL !   FAIL !   FAIL !   FAIL !   FAIL !   FAIL !   FAIL !   FAIL !   FAIL !   FAIL !   FAIL !   ");

        break;
	  case "man":
        term.echo("To Be light you have to have a very high iq 1 to get through knowledge Gentoo. The UI is greatly delicately balanced, and without a solid make attempt to get of UI UX design most of the elements will go over an of a certain sort viewer s head. There s also the end points complexnature, which is quickly with one's fingers put together into its code 2 its middle part, heart design pulls up heavily from Linux GNU written works, forinstance. The fans get through knowledge this material they have the brain-wise amount of room to truly value the depthsof these lines of code 2, to get money for that they are not just very bright- they say something deep about living. Asa outcome people who not like Gentoo truly are foolish persons- of direction they would not value, for instance,the elegantness of the one putting into existence group of words, Year of the Linux tabletop, which itself is a cryptic referenceto Torvald s story of great doings Linux GNU bits of grain. I m 3 smiling in a foolish way right now just making a mind-picture one of those addlepated simpletonsscratching their heads in orderless mind as Danniel Robbins person having specially great powers of mind bright ideas unfolds itself on their computer looking-glass. What foolish persons. how I regret them. And yes, incidentally, i DO have a Gentoo design on skin with a needle. And no, you can not see it. It'sfor the women (of respect)' eyes only- and even then they have to put examples on view of that they Re 4 within 5 iq 1 points of my own through being put before lower beforehand. nothin personnel young person");
        break;
       case "screenfetch":
        term.echo("gentoo@installationfloppy");
        term.echo("     -odNMMMMMMMMNNmhy+-`             OS: Gentoo Live Floppy");
        term.echo("   -yNMMMMMMMMMMMNNNmmdhy+-           Kernel: GNU/HURD, compiling since 99");
        term.echo("`omMMMMMMMMMMMMNmdmmmmddhhy/`         Uptime: 8h 42m");
        term.echo("omMMMMMMMMMMMNhhyyyohmdddhhhdo`       Packages: enough");
        term.echo(".ydMMMMMMMMMMdhs++so/smdddhhhhdm+`    Shell: zsh");
        term.echo("oyhdmNMMMMMMMNdyooydmddddhhhhyhNd.    Resolution: 8192x8192");
        term.echo("  :oyhhdNNMMMMMMMNNNmmdddhhhhhyymMh   DE: you wish");
        term.echo("    .:+sydNMMMMMNNNmmmdddhhhhhhmMmy   WM: see above");
        term.echo("       /mMMMMMMNNNmmmdddhhhhhmMNhs:   CPU: Intel pentium II 450 @ 8x 12.1GHz [HOUSEFIRE°C]");
        term.echo("    `oNMMMMMMMNNNmmmddddhhdmMNhs+`    GPU: VooDoo II");
        term.echo("  `sNMMMMMMMMNNNmmmdddddmNMmhs/.      RAM: 16100 KB / 16334 KB");
        term.echo("/NMMMMMMMMNNNNmmmdddmNMNdso:`");
        term.echo("+MMMMMMMNNNNNmmmmdmNMNdso/-");
        term.echo("yMMNNNNNNNmmmmmNNMmhs+/-`");
        term.echo("/hMMNNNNNNNNMNdhs++/`");
        term.echo("`/ohdmmddhys+++/:.`");
        term.echo("  `-//////:--.");
        break;
      default:
        term.echo("unknown command: " + cmd);
        break;
    }
  }
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
  _asyncToGenerator(function* () {
    var random = Math.random,
        sleep = { then: function then(_) { setTimeout(_, random() * 50); } },
        i = 0,
        len = log.length,
        style = document.createElement("style"),
        head = $("head").get(0);
    style.appendChild(document.createTextNode(".cmd { display: none; }"));
    head.appendChild(style);
    function cancel(e) { e.stopImmediatePropagation(); }
    window.addEventListener("input", cancel, true);
    window.addEventListener("keydown", cancel, true);
    window.addEventListener("keypress", cancel, true);
    window.addEventListener("keyup", cancel, true);
    term = $("body").terminal(parse, {
      prompt: "[[b;red;black]gentoo] [[b;blue;black]~#] ", greetings: ""
    });

    for (; i < len; ++i) {
      term.echo(log[i]);
      yield sleep;
    }

    window.removeEventListener("keyup", cancel, true);
    window.removeEventListener("keypress", cancel, true);
    window.removeEventListener("keydown", cancel, true);
    window.removeEventListener("input", cancel, true);
    head.removeChild(style);
  })();
}());
