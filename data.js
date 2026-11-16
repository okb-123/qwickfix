/* Qwick Fix content.
   Writing rules: talk to one person, one action per step, say what they will see next,
   explain a technical word the first time in brackets, no filler.
   Markup: **bold**, `command`, [[Ctrl+Alt+Del]] keycaps, [label](https://url) or [label](#/p/id).
   A step is a string, or { t, img, cap, cmd: [..], table } where img is a file in /images (no extension).
   aka: other ways people describe the problem. Used by search only. */

const CONTACT = {
  phone: '+233551982938',
  phoneLabel: '055 198 2938',
  whatsapp: 'https://wa.me/233551982938',
  group: 'https://chat.whatsapp.com/J4v6dP7qL706CJhzXO6wVd',
  location: 'KNUST Commercial Area, Kumasi',
  map: 'https://www.google.com/maps/search/?api=1&query=KNUST+Commercial+Area+Kumasi'
};

const CATS = [
  { id: 'boot',     name: 'Boot issues',            icon: 'power',     blurb: 'Won’t start, error on a black screen, keeps restarting' },
  { id: 'recovery', name: 'Repair and reset',       icon: 'lifebuoy',  blurb: 'Safe Mode, reset, forgotten password, BitLocker' },
  { id: 'slow',     name: 'Slow, hot or battery',   icon: 'gauge',     blurb: 'Hanging, low storage, loud fan, battery at 0%' },
  { id: 'network',  name: 'WiFi and internet',      icon: 'wifi',      blurb: 'No WiFi, no internet, hotspot, LAN cable' },
  { id: 'malware',  name: 'Viruses',                icon: 'shield',    blurb: 'Shortcut virus, Chrome hijacked, removing viruses' },
  { id: 'storage',  name: 'USB drives and disks',   icon: 'usb',       blurb: 'Not showing, write-protected, file too large' },
  { id: 'drivers',  name: 'Sound, screen, camera',  icon: 'chip',      blurb: 'No sound, brightness, camera, drivers' },
  { id: 'bluetooth',name: 'Bluetooth',              icon: 'bluetooth', blurb: 'Won’t turn on, won’t pair, no sound in earbuds' },
  { id: 'files',    name: 'Files and folders',      icon: 'folder',    blurb: 'Hidden files, access denied, can’t delete' },
  { id: 'windows',  name: 'Installing Windows',     icon: 'download',  blurb: 'Fresh install with a USB, and setup errors' },
  { id: 'office',   name: 'Microsoft Office',       icon: 'file',      blurb: 'Get Word and Excel free, fix install errors' }
];

/* [brand, boot menu key, BIOS key, note]. Boot menu keys come from the Windows installation chapter. */
const BOOT_KEYS = [
  ['Acer',      'F12', 'F2',  ''],
  ['ASRock',    'F11', 'F2',  'Del also opens BIOS on most ASRock machines.'],
  ['Asus',      'F8',  'F2',  'Many Asus laptops use Esc for the boot menu.'],
  ['Dell',      'F12', 'F2',  ''],
  ['Fujitsu',   'F12', 'F2',  ''],
  ['Gigabyte',  'F12', 'Del', ''],
  ['HP',        'F9',  'F10', 'Or press Esc a few times. A menu shows up where F9 is boot options and F2 is system diagnostics.'],
  ['Intel',     'F10', 'F2',  ''],
  ['Lenovo',    'F12', 'F2',  'ThinkPads use F1 for BIOS. Some IdeaPads have a tiny Novo button beside the power button.'],
  ['Machinist', 'F11', 'Del', ''],
  ['MSI',       'F11', 'Del', '']
];

/* Blue screen stop codes: [code, what it means, what to try]. (fix:N) jumps to fix N on the blue screen page. */
const STOP_CODES = [
  ['CRITICAL_PROCESS_DIED', 'A part of Windows that must always run stopped. Usually damaged Windows files or a bad update.', '[Repair Windows files](fix:3), then [undo the last change](fix:2)'],
  ['IRQL_NOT_LESS_OR_EQUAL', 'A driver used memory it shouldn’t. Often the WiFi or graphics driver.', '[Update the drivers](fix:4), then [test the memory](fix:5)'],
  ['PAGE_FAULT_IN_NONPAGED_AREA', 'Windows looked for something in memory and it wasn’t there. Often the RAM or a driver.', '[Test the memory](fix:5), then [update the drivers](fix:4)'],
  ['SYSTEM_SERVICE_EXCEPTION', 'A driver or Windows file crashed.', '[Update the drivers](fix:4), then [repair Windows files](fix:3)'],
  ['KMODE_EXCEPTION_NOT_HANDLED', 'A driver crashed.', '[Update the drivers](fix:4)'],
  ['KERNEL_SECURITY_CHECK_FAILURE', 'Windows found damaged data. Usually a driver, the RAM or damaged files.', '[Update the drivers](fix:4), [repair Windows files](fix:3), [test the memory](fix:5)'],
  ['MEMORY_MANAGEMENT', 'A problem with the RAM.', '[Test the memory](fix:5)'],
  ['DPC_WATCHDOG_VIOLATION', 'The disk or its driver stopped answering in time.', '[Update the drivers](fix:4), mainly storage and chipset. Then [check the hard disk](fix:6)'],
  ['VIDEO_TDR_FAILURE', 'The graphics driver stopped responding.', 'Reinstall the graphics driver. See [update the drivers](fix:4)'],
  ['INACCESSIBLE_BOOT_DEVICE', 'Windows can’t read the disk it starts from.', '[If it won’t start anymore](fix:7). Also check BIOS in [“No bootable device”](#/p/no-bootable-device)'],
  ['UNMOUNTABLE_BOOT_VOLUME', 'The disk Windows starts from is damaged or can’t be read.', '[Check the hard disk](fix:6), then [if it won’t start anymore](fix:7)'],
  ['BAD_SYSTEM_CONFIG_INFO', 'Windows settings got damaged.', 'Use System Restore. See [if it won’t start anymore](fix:7)'],
  ['WHEA_UNCORRECTABLE_ERROR', 'A hardware fault: overheating, RAM, disk or processor.', 'Check for [overheating](#/p/overheating), then [check the hard disk](fix:6). If it continues, [contact us](#/contact)'],
  ['CLOCK_WATCHDOG_TIMEOUT', 'The processor stopped responding. Usually hardware or overheating.', 'Check for [overheating](#/p/overheating). If it continues, [contact us](#/contact)']
];

/* Error codes that start with 0x: [code, what you usually see, what to do]. */
const ERROR_CODES = [
  ['0xc000007b', '“The application was unable to start correctly” when opening an app or game.', 'The app needs Visual C++ or DirectX. See [“MSVCP110.dll is missing”](#/p/missing-dll)'],
  ['0xc0000005', 'An app crashes or won’t open.', 'Reinstall the app. If many apps crash, [repair Windows files](#/p/blue-screen)'],
  ['0xc000000f', '“Your PC needs to be repaired” on a blue or black screen at startup.', '[Repair startup files](#/p/repair-boot-files), or run Startup Repair from [Automatic Repair](#/p/repair-loop)'],
  ['0xc0000225', '“Your PC needs to be repaired” at startup.', '[Repair startup files](#/p/repair-boot-files)'],
  ['0xc000000e', '“A required device isn’t connected” at startup.', 'Check BIOS can see the disk in [“No bootable device”](#/p/no-bootable-device), then [repair startup files](#/p/repair-boot-files)'],
  ['0xc0000001', 'Startup fails with this code.', 'Run Startup Repair from [Automatic Repair](#/p/repair-loop), then [check the hard disk](#/p/failing-hard-disk)'],
  ['0x0000007b', 'Blue screen at startup. Same as INACCESSIBLE_BOOT_DEVICE.', 'See [blue screen](#/p/blue-screen)'],
  ['0x80070005', '“Access is denied” when installing or changing something.', 'Right-click the app and choose **Run as administrator**. For folders, see [“Access denied”](#/p/access-denied)'],
  ['0x80070070', 'An update or install fails because there isn’t enough space.', '[Free up space](#/p/low-storage)'],
  ['0x80070002', 'Windows Update fails.', '[Run the Windows Update fixer](fix:2)'],
  ['0x800f0922', 'Windows Update fails to install.', 'Turn off any VPN, then [run the Windows Update fixer](fix:2)'],
  ['0x80070057', 'Windows Update or a backup fails with “The parameter is incorrect”.', '[Run the Windows Update fixer](fix:2)'],
  ['0x8007045d', 'Copying from a flash drive or disk fails with an I/O error.', 'The drive may be damaged. See [flash drive won’t open](#/p/usb-cant-open) or [check the hard disk](#/p/failing-hard-disk)'],
  ['0x80004005', '“Unspecified error”, often when unzipping or copying files.', 'Try again as administrator, or unzip with 7-Zip (free)']
];

/* level 3 shows an "Advanced" tag. Fixes are ordered easiest first. */
const PROBLEMS = [

/* ═══════════════ BOOT ISSUES ═══════════════ */
{
  id: 'no-bootable-device', cat: 'boot',
  title: '“No bootable device found”',
  aka: ['Reboot and select proper boot device', 'insert boot media', 'laptop won’t turn on', 'laptop won’t boot', 'not booting', 'hard disk not detected in bios', 'laptop not coming on', 'won’t start'],
  summary: 'Your laptop turns on, but instead of Windows you get a black screen with this message. It means the laptop can’t find Windows. Most times the laptop is looking in the wrong place, or the hard disk is loose.',
  see: [
    { img: 'boot-01', cap: '“No bootable devices found”' },
    { img: 'boot-02', cap: '“Reboot and select proper boot device”' }
  ],
  causes: ['The laptop is trying to start from a USB drive or CD instead of the hard disk', 'The hard disk is loose inside', 'Windows got damaged after a power cut or a virus', 'The hard disk is dying'],
  fixes: [
    { title: 'Remove USB drives and CDs', steps: [
      'Pull out every flash drive, external disk and memory card. Take out any CD.',
      'Restart the laptop. If it starts normally, the laptop was trying to start from the USB drive.'
    ]},
    { title: 'Put the hard disk first in the boot order', steps: [
      'Restart the laptop. As soon as it comes on, keep tapping the BIOS key. It’s usually [[F2]], [[F10]] or [[Del]]. [Find the key for your brand](#/keys).',
      'You’ll see a blue or grey settings screen. That is the BIOS (the laptop’s built-in settings). Use the arrow keys to open the **Boot** tab.',
      { t: 'Move the hard disk, or **Windows Boot Manager**, to number 1 on the list.', img: 'boot-08', cap: 'Windows Boot Manager at number 1' },
      'Press [[F10]], then [[Enter]] to save. The laptop restarts.'
    ]},
    { title: 'Check that BIOS can see the hard disk', steps: [
      'Open BIOS again and look for your hard disk under **Main**, **Storage** or **Information**.',
      'If you can see it, the disk is connected. Go to the next fix.',
      'If you can’t see it, the disk is loose or dead. The fix after this shows you how to reseat it.'
    ]},
    { title: 'Reseat the hard disk', level: 3, warn: 'Only do this if you’re comfortable opening a laptop. If not, [contact us](#/contact).', steps: [
      'Shut down the laptop and unplug the charger.',
      'Unscrew the back cover.',
      'Pull the hard disk out of its connector, then push it back in firmly.',
      'Close it up and turn it on.'
    ]},
    { title: 'Switch the boot mode in BIOS', level: 3, warn: 'Write down what you change. If it doesn’t help, change it back.', steps: [
      'Open BIOS.',
      { t: 'Find **Boot Mode**. If it says **UEFI**, change it to **Legacy**. If it says Legacy, change it to UEFI.', img: 'boot-07', cap: 'The Boot Mode option' },
      'Turn **Secure Boot** off, or on if it was off.',
      'Press [[F10]] to save, then restart.'
    ]},
    { title: 'Test the hard disk', steps: [
      'Follow [Check if your hard disk is dying](#/p/failing-hard-disk). If the disk is fine, Windows needs repairing or reinstalling. See [Install Windows from a USB](#/p/install-windows-11).'
    ]}
  ],
  after: ['Shut down from the Start menu. Holding the power button to switch off can damage Windows over time.'],
  related: ['disk-read-error', 'blinking-cursor', 'failing-hard-disk']
},
{
  id: 'disk-read-error', cat: 'boot',
  title: '“A disk read error occurred”',
  aka: ['Press Ctrl+Alt+Del to restart', 'disk read error', 'hard disk error on startup'],
  summary: 'Your laptop shows this message instead of starting Windows. The hard disk is struggling to be read. That usually means it’s dying, so get your files off it soon.',
  see: [{ img: 'boot-03', cap: '“A disk read error occurred”' }],
  causes: ['The hard disk is dying', 'The disk is loose', 'Startup files are damaged'],
  fixes: [
    { title: 'Reseat the hard disk', level: 3, warn: 'Only open the laptop if you’re comfortable doing it.', steps: [
      'Shut down, unplug the charger and remove the back cover.',
      'Pull the hard disk out and push it back in firmly. Close up and turn on.'
    ]},
    { title: 'Test the disk', steps: [
      'Run the test in [Check if your hard disk is dying](#/p/failing-hard-disk).',
      'If it says **Caution** or **Bad**, copy your files off and replace the disk. An SSD (a faster kind of disk) is the best replacement.'
    ]},
    { title: 'Repair the startup files', level: 3, steps: [
      'If the disk tests fine, follow [Repair startup files with Command Prompt](#/p/repair-boot-files).'
    ]}
  ],
  related: ['failing-hard-disk', 'no-bootable-device']
},
{
  id: 'blinking-cursor', cat: 'boot',
  title: 'Black screen with a blinking line, Windows never loads',
  aka: ['blinking white cursor', 'black screen on startup', 'underscore on black screen', 'no display after logo'],
  summary: 'You turn on the laptop and only see a black screen with a small white line blinking in the corner. Windows itself is damaged.',
  see: [{ img: 'boot-04', cap: 'A black screen with a blinking line' }],
  causes: ['Windows is damaged', 'The laptop is starting from the wrong place'],
  fixes: [
    { title: 'Check the boot order', steps: [
      'Make sure the hard disk is first in BIOS. The steps are in [“No bootable device found”](#/p/no-bootable-device).'
    ]},
    { title: 'Repair or reinstall Windows', level: 3, steps: [
      'Start the laptop from a Windows USB drive.',
      'Choose **Repair your computer → Troubleshoot → Startup Repair**. If that fails, reinstall Windows. See [Install Windows from a USB](#/p/install-windows-11).'
    ]}
  ],
  related: ['black-screen-after-login', 'install-windows-11']
},
{
  id: 'repair-loop', cat: 'boot',
  title: 'Stuck on “Preparing Automatic Repair”',
  aka: ['Diagnosing your PC', 'Automatic Repair couldn’t repair your PC', 'keeps restarting', 'restart loop', 'stuck on repair', 'blue screen advanced options', 'won’t start'],
  summary: 'Your laptop keeps restarting into “Automatic Repair” and never gets to the login screen.',
  see: [
    { img: 'boot-05', cap: '“Preparing Automatic Repair”, then “Diagnosing your PC”' },
    { img: 'boot-06', cap: '“Automatic Repair couldn’t repair your PC”' }
  ],
  causes: ['Windows files got damaged', 'An update failed halfway', 'A bad driver (the small program that runs a part of your laptop)', 'The power went off while it was starting'],
  fixes: [
    { title: 'Run Startup Repair', steps: [
      'Hold the power button until the laptop goes off.',
      'Turn it on. When you see the logo, hold power again to switch it off. Do this **3 times**. On the next start you’ll see Automatic Repair.',
      { t: 'On the blue screen, click **Advanced options**.', img: 'recovery-02', cap: 'Click Advanced options' },
      { t: 'Click **Troubleshoot**, then **Advanced options**, then **Startup Repair**.', img: 'recovery-03', cap: 'Startup Repair' },
      'Wait. If it works, Windows starts normally.'
    ]},
    { title: 'Start in Safe Mode and remove the last thing you installed', steps: [
      { t: 'From **Advanced options**, click **Startup Settings**.', img: 'recovery-04', cap: 'Startup Settings' },
      'Click **Restart**.',
      { t: 'You’ll see a numbered list. Press [[4]] to start in Safe Mode (Windows with only the basics).', img: 'recovery-05', cap: 'Press 4 for Safe Mode' },
      'In Safe Mode, uninstall any app or driver you installed just before the problem started. Then restart.'
    ]},
    { title: 'Go back in time with System Restore', steps: [
      'From **Advanced options**, click **System Restore**.',
      'Pick a date before the problem started and follow the prompts.',
      'Your files stay. Apps installed after that date are removed.'
    ]},
    { title: 'Reset Windows', level: 3, steps: [
      'If nothing works, [reset Windows and keep your files](#/p/reset-this-pc).'
    ]}
  ],
  related: ['update-boot-loop', 'safe-mode', 'reset-this-pc']
},
{
  id: 'black-screen-after-login', cat: 'boot',
  title: 'Black screen after typing your password',
  aka: ['only mouse pointer shows', 'blank screen after login', 'desktop not loading', 'taskbar missing', 'no icons on desktop', 'explorer crashed'],
  summary: 'You type your password and the screen goes black. Only the mouse pointer shows. Windows started, but the desktop didn’t load.',
  see: [{ img: 'files-08', cap: 'Only the mouse pointer on a black screen' }],
  causes: ['File Explorer, the part of Windows that shows your desktop and taskbar, didn’t load', 'The screen driver crashed'],
  fixes: [
    { title: 'Restart File Explorer', steps: [
      'Press [[Ctrl+Alt+Del]] together and click **Task Manager**.',
      'Click **File**, then **Run new task**.',
      { t: 'Type exactly this: `explorer.exe`, then hit [[Enter]]. Your desktop comes back.', img: 'files-09', cap: 'Type explorer.exe and click OK' },
      'If Task Manager won’t open, press [[Win+R]] and type `explorer.exe` there instead.'
    ]},
    { title: 'Update the screen driver in Safe Mode', steps: [
      'Start in [Safe Mode](#/p/safe-mode).',
      'Open **Device Manager**, click the arrow beside **Display adapters**, right-click your graphics card and choose **Update driver**.'
    ]}
  ],
  related: ['safe-mode', 'blinking-cursor']
},

{
  id: 'blue-screen', cat: 'boot',
  title: 'Blue screen: “Your PC ran into a problem”',
  aka: ['blue screen of death', 'bsod', 'stop code', 'your pc ran into a problem and needs to restart', 'blue screen sad face', 'blue screen error code', 'crash blue screen'].concat(STOP_CODES.map(c => c[0])),
  summary: 'The screen turns blue with a sad face and restarts. At the bottom there’s a **stop code**, like CRITICAL_PROCESS_DIED. That code tells you what went wrong, so it’s the most useful thing on the screen.',
  causes: ['A bad or outdated driver (the small program that runs a part of your laptop)', 'Damaged Windows files', 'An update or app that just got installed', 'Faulty or loose RAM (memory)', 'A dying hard disk, or overheating'],
  fixes: [
    { title: 'Find your stop code', noVerdict: true, steps: [
      'When the blue screen shows, take a photo of it with your phone. It restarts quickly, so be fast. If you miss it, it’ll likely show again.',
      'Look for the words after **Stop code:** near the bottom. You can also [search with the photo](#/search).',
      { t: 'Find your code below. Type it in the box to filter:', table: 'stopcodes' }
    ]},
    { title: 'Undo the last change', steps: [
      'Think about what you did just before the blue screens started. A new app, a driver, or an update?',
      'Uninstall a new app in **Settings → Apps → Installed apps**.',
      'Remove a recent update: **Settings → Windows Update → Update history → Uninstall updates**. Uninstall the newest one and restart.'
    ]},
    { title: 'Repair Windows files', steps: [
      'Click Start, type `cmd`, right-click **Command Prompt** and click **Run as administrator**.',
      { t: 'Type this and hit [[Enter]]. It downloads fresh copies of damaged files, so keep the internet on. It can take 15 minutes:', cmd: ['DISM /Online /Cleanup-Image /RestoreHealth'] },
      { t: 'When it finishes, type this and hit [[Enter]]:', cmd: ['sfc /scannow'], img: 'slow-05', cap: 'sfc /scannow running' },
      'Wait until it reaches 100%, then restart.'
    ]},
    { title: 'Update the drivers', steps: [
      'Press [[Win+X]] and click **Device Manager**. Anything with a yellow mark is a problem. Right-click it and click **Update driver**.',
      'Update the **graphics**, **WiFi** and **storage** drivers from your laptop brand’s website. See [Install the right drivers](#/p/install-drivers).',
      'Did the blue screens start after a driver update? Right-click that device, click **Properties → Driver → Roll Back Driver**.'
    ]},
    { title: 'Test the memory (RAM)', steps: [
      'Save your work. Press [[Win+R]], type `mdsched.exe` and hit [[Enter]].',
      'Click **Restart now and check for problems**. The laptop restarts and runs a test on a blue screen. It takes about 10 to 20 minutes.',
      'After it restarts, the result shows at the bottom right. If it found problems, the RAM needs reseating or replacing. [Contact us](#/contact).'
    ]},
    { title: 'Check the hard disk', steps: [
      'Open Command Prompt as administrator.',
      { t: 'Type this and hit [[Enter]]:', cmd: ['chkdsk C: /f /r'] },
      'It asks to check on the next restart. Type `Y`, hit [[Enter]] and restart. Don’t switch off while it runs. It can take an hour.',
      'Then follow [Check if your hard disk is dying](#/p/failing-hard-disk).'
    ]},
    { title: 'If it won’t start anymore', level: 3, steps: [
      'If the blue screen comes back every time you start, open [Safe Mode](#/p/safe-mode) and do fixes 2 to 4 there.',
      'Can’t get into Safe Mode? From the blue recovery screen, use **System Restore** or **Startup Repair**. See [Stuck on Automatic Repair](#/p/repair-loop).',
      'Still blue screening? [Reset Windows and keep your files](#/p/reset-this-pc).'
    ]}
  ],
  after: ['One blue screen after a power cut can be a one-off. If it keeps happening, work through the fixes.'],
  related: ['error-codes', 'repair-loop', 'install-drivers']
},

/* ═══════════════ REPAIR AND RESET ═══════════════ */
{
  id: 'safe-mode', cat: 'recovery', guide: true,
  title: 'How to start in Safe Mode',
  aka: ['safe boot', 'boot in safe mode', 'advanced startup', 'startup settings', 'f4'],
  summary: 'Safe Mode starts Windows with only the basics. Use it to remove a bad app, driver or virus that stops Windows from working.',
  fixes: [
    { title: 'If Windows still opens', when: 'Use this when you can still get to the Start menu or login screen.', steps: [
      'Hold [[Shift]] on the keyboard and click **Restart** in the Start menu.',
      { t: 'Keep holding until a blue screen shows. Click **Troubleshoot → Advanced options → Startup Settings → Restart**.', img: 'malware-09', cap: 'Troubleshoot, Advanced options, Startup Settings' },
      'You’ll see a numbered list. Press [[4]].'
    ]},
    { title: 'If Windows won’t open', when: 'Use this when the laptop never gets to the login screen.', steps: [
      'Turn the laptop on. When the logo shows, hold the power button to switch it off. Do this **3 times**.',
      'On the next start you’ll see Automatic Repair. Click **Advanced options → Troubleshoot → Advanced options**.',
      { t: 'Click **Startup Settings**, then **Restart**.', img: 'recovery-04', cap: 'Startup Settings' },
      { t: 'Press [[4]] or [[F4]].', img: 'recovery-05', cap: '4) Enable Safe Mode' },
      'Done what you needed? Restart normally. If it still won’t start, use System Restore or [reset Windows](#/p/reset-this-pc).'
    ]},
    { title: 'Using msconfig', steps: [
      'Press [[Win+R]], type `msconfig` and hit [[Enter]].',
      'Open the **Boot** tab, tick **Safe boot**, click **OK** and restart.',
      'When you’re done, open msconfig again and untick **Safe boot**. If you forget, it keeps starting in Safe Mode.'
    ]}
  ],
  related: ['repair-loop', 'remove-malware']
},
{
  id: 'update-boot-loop', cat: 'recovery',
  title: 'Keeps restarting after a Windows update',
  aka: ['restarts after update', 'working on updates loop', 'uninstall update', 'error after update'],
  summary: 'Windows installs an update, restarts, shows an error, then restarts again and again.',
  causes: ['The update is broken', 'A driver doesn’t work with the update'],
  fixes: [
    { title: 'Remove the latest update', steps: [
      'Switch the laptop off while it’s starting, 3 times. Automatic Repair opens.',
      { t: 'Click **Advanced options**, then **Uninstall Updates**.', img: 'recovery-07', cap: 'Uninstall Updates' },
      { t: 'Click **Uninstall latest quality update**.', img: 'recovery-08', cap: 'Uninstall latest quality update' },
      'Restart.'
    ]},
    { title: 'Go back with System Restore', warn: 'Changes after the date you pick are lost. Your files stay.', steps: [
      'From **Advanced options**, click **System Restore**.',
      'Pick a date before the update.'
    ]}
  ],
  after: ['Don’t switch off the laptop while it says “Working on updates”.'],
  related: ['repair-loop', 'reset-this-pc']
},
{
  id: 'bitlocker', cat: 'recovery',
  title: 'Asking for a BitLocker recovery key',
  aka: ['bitlocker recovery', 'enter the recovery key', 'bitlocker blue screen', '48 digit key', 'drive locked'],
  summary: 'Your laptop shows a blue screen asking for a long BitLocker recovery key. BitLocker locks your files so no one else can read them. Without the key, the only way in is to format the drive.',
  fixes: [
    { title: 'Get the key from your Microsoft account', steps: [
      'On your phone, open [aka.ms/myrecoverykey](https://aka.ms/myrecoverykey).',
      'Sign in with the Microsoft account (email) you used on the laptop. Microsoft sends a code to confirm it’s you.',
      'You’ll see a list of keys. Match the **Key ID** on the laptop screen, then type that key into the laptop.'
    ]},
    { title: 'No account or no key', level: 3, warn: 'This erases everything on the drive.', steps: [
      'Reinstall Windows. The drive will be formatted. See [Install Windows from a USB](#/p/install-windows-11).'
    ]}
  ],
  related: ['install-windows-11', 'forgot-password']
},
{
  id: 'forgot-password', cat: 'recovery',
  title: 'Forgot your password, can’t log in',
  aka: ['locked out', 'login screen', 'reset password', 'forgot pin', 'enable administrator account'],
  summary: 'You’re stuck at the login screen and can’t get into your account.',
  fixes: [
    { title: 'If you log in with an email', steps: [
      'On the login screen click **I forgot my password**, or reset it on your phone at [account.live.com/password/reset](https://account.live.com/password/reset).'
    ]},
    { title: 'Turn on the hidden Administrator account', level: 3, steps: [
      'On the login screen, click the power icon. Hold [[Shift]] and click **Restart**.',
      { t: 'Click **Troubleshoot → Advanced options → Command Prompt**.', img: 'recovery-06', cap: 'Command Prompt in Advanced options' },
      { t: 'A black window opens. Type exactly this and hit [[Enter]]:', cmd: ['net user administrator /active:yes'] },
      'Restart. You’ll see an **Administrator** account on the login screen.',
      'Log in with it, then change your own password in **Settings → Accounts**.'
    ]}
  ],
  related: ['reset-this-pc', 'bitlocker']
},
{
  id: 'reset-this-pc', cat: 'recovery',
  title: 'Reset Windows and keep your files',
  aka: ['reset this pc', 'factory reset', 'start fresh', 'reinstall without losing files', 'format laptop'],
  summary: 'When nothing else works, Reset this PC reinstalls Windows. Your documents stay. Apps you installed are removed.',
  warn: 'Back up important files to a flash drive or Google Drive first.',
  fixes: [
    { title: 'Reset from the blue recovery screen', steps: [
      'Hold [[Shift]] and click **Restart**. If Windows won’t open, switch it off while starting 3 times.',
      { t: 'Click **Troubleshoot → Reset this PC**.', img: 'recovery-09', cap: 'Reset this PC' },
      'Click **Keep my files**. Choose **Remove everything** only if you want a clean laptop.',
      'Follow the prompts. It restarts a few times and can take an hour. Keep the charger plugged in.'
    ]}
  ],
  related: ['install-windows-11', 'repair-loop']
},
{
  id: 'repair-boot-files', cat: 'recovery',
  title: 'Repair startup files with Command Prompt',
  aka: ['bootrec', 'bcd error', 'missing boot files', 'fixmbr', 'fixboot', 'rebuildbcd'],
  summary: 'For startup errors that Startup Repair can’t fix.',
  warn: 'For people who are comfortable with commands. Type them exactly as shown.',
  fixes: [
    { title: 'Rebuild the startup files', level: 3, steps: [
      { t: 'Open the blue recovery screen and click **Troubleshoot → Advanced options → Command Prompt**.', img: 'recovery-06', cap: 'Command Prompt' },
      { t: 'Type these one at a time. Hit [[Enter]] after each:', cmd: ['bootrec /fixmbr', 'bootrec /fixboot', 'bootrec /scanos', 'bootrec /rebuildbcd'] },
      'Close the window and restart.'
    ]}
  ],
  related: ['repair-loop', 'no-bootable-device']
},

{
  id: 'error-codes', cat: 'recovery', guide: true,
  title: 'Error code that starts with 0x',
  aka: ['error code', 'windows error code', '0x error', 'hex error code', 'update error code', 'the application was unable to start correctly', 'your pc needs to be repaired'].concat(ERROR_CODES.map(c => c[0])),
  summary: 'Windows sometimes shows a code like **0xc000007b** instead of saying what’s wrong. Find yours below. Each one tells you where the fix is.',
  fixes: [
    { title: 'Find your code', steps: [
      'Copy the code exactly, including the letters. A photo of the screen helps.',
      { t: 'Type it in the box to filter the list:', table: 'errorcodes' }
    ]},
    { title: 'Run the Windows Update fixer', when: 'For codes you get while updating Windows.', steps: [
      'Make sure you have internet and at least 10GB of free space. See [Free up space](#/p/low-storage).',
      'Go to **Settings → System → Troubleshoot → Other troubleshooters**.',
      'Next to **Windows Update**, click **Run**. It finds and fixes common update problems.',
      'Restart, then try **Settings → Windows Update → Check for updates** again.'
    ]},
    { title: 'Code not on the list?', steps: [
      'Type the exact code in the search bar at the top, or [search with a photo](#/search).',
      'Still nothing? Send us a photo of the screen on [WhatsApp](https://wa.me/233551982938) and we’ll tell you what it means.'
    ]}
  ],
  related: ['blue-screen', 'repair-boot-files', 'missing-dll']
},

/* ═══════════════ SLOW, HOT OR BATTERY ═══════════════ */
{
  id: 'slow-laptop', cat: 'slow',
  title: 'Laptop is slow or hanging',
  aka: ['freezing', 'lagging', 'hanging', 'takes long to start', 'apps take long to open', 'cursor lags', 'sluggish', 'not responding', 'too slow'],
  summary: 'Apps take forever to open, clicks respond late, or it freezes. Most times you can fix this without buying anything.',
  causes: ['Too many apps open by themselves when Windows starts', 'The C drive is almost full', 'A virus running in the background', 'A waiting Windows update', 'An old hard disk or too little RAM (memory)'],
  fixes: [
    { title: 'See what’s using the laptop', steps: [
      'Right-click the taskbar (the bar at the bottom) and click **Task Manager**.',
      { t: 'Look at **CPU**, **Memory** and **Disk**. Anything near 100% is what’s slowing you down.', img: 'slow-01', cap: 'Disk at 98%' },
      'Click an app that’s using a lot and click **End task**.'
    ]},
    { title: 'Stop apps from opening at startup', steps: [
      'In Task Manager, click **Startup apps** (or the **Startup** tab).',
      { t: 'Right-click apps you don’t need at startup, like Spotify, Zoom or Adobe, and click **Disable**.', img: 'slow-02', cap: 'Disable a startup app' }
    ]},
    { title: 'Free up space', steps: [
      { t: 'Go to **Settings → System → Storage**. If the bar is almost full, that slows everything.', img: 'slow-03', cap: 'Storage settings' },
      'Follow [Free up space when storage is full](#/p/low-storage). It shows how to clear the hidden update files.'
    ]},
    { title: 'Scan for viruses', steps: [
      { t: 'Open **Windows Security → Virus & threat protection → Scan options**. Choose **Full scan** and click **Scan now**.', img: 'slow-10', cap: 'Full scan' },
      'Remove anything it finds.'
    ]},
    { title: 'Install waiting updates', steps: [
      { t: 'Look for an update dot on the taskbar.', img: 'slow-06', cap: 'Update icon on the taskbar' },
      { t: 'If the power menu shows **Update and restart**, click it.', img: 'slow-07', cap: 'Update and restart' }
    ]},
    { title: 'Repair Windows files', steps: [
      'Click Start, type `cmd`, right-click **Command Prompt** and click **Run as administrator**.',
      { t: 'Type exactly this and hit [[Enter]]:', cmd: ['sfc /scannow'], img: 'slow-05', cap: 'sfc /scannow running' },
      'Wait until it reaches 100%, then restart.'
    ]},
    { title: 'Turn off the fancy effects', steps: [
      'Right-click **This PC**, click **Properties**, then **Advanced system settings**.',
      { t: 'Under **Performance**, click **Settings**, choose **Adjust for best performance** and click **OK**.', img: 'slow-11', cap: 'Adjust for best performance' }
    ]},
    { title: 'Check if it needs an upgrade', steps: [
      { t: 'If **Memory** stays above 90% even after all this, add more RAM. Going from 4GB to 8GB makes a big difference.', img: 'slow-12', cap: 'Memory at 98%' },
      'If **Disk** stays at 100% or startup takes 3 to 5 minutes, [check the hard disk](#/p/failing-hard-disk). Changing it to an SSD makes the laptop much faster.'
    ]}
  ],
  after: ['Avoid “PC booster” and “cleaner” apps. They usually make things worse.'],
  related: ['low-storage', 'overheating', 'failing-hard-disk']
},
{
  id: 'low-storage', cat: 'slow',
  title: 'Storage is full but you don’t have many files',
  aka: ['low storage', 'c drive full', 'disk space full', 'low disk space', 'windows.old', 'disk cleanup', 'not enough space on laptop', 'memory full'],
  summary: 'Your laptop keeps saying storage is low, yet you don’t have many files. After updates, Windows leaves behind files that take a lot of space, and an old Windows folder (Windows.old) can be sitting there too.',
  fixes: [
    { title: 'Clear the hidden files with Disk Cleanup', steps: [
      { t: 'Click Start and type `Disk Cleanup`. Click it.', img: 'slow-08', cap: 'Search for Disk Cleanup' },
      'Click **Clean up system files**. Wait while it scans.',
      { t: 'Tick **Temporary files**, **Windows Update Cleanup**, **Delivery Optimization Files** and **Previous Windows installation(s)** if you see it. Click **OK**, then **Delete Files**.', img: 'slow-09', cap: 'Choose what to delete' }
    ]},
    { title: 'Remove apps and big files', steps: [
      'Go to **Settings → Apps → Installed apps** and uninstall apps you don’t use.',
      'Move movies and old downloads to a flash drive or Google Drive.'
    ]}
  ],
  related: ['slow-laptop']
},
{
  id: 'battery-zero', cat: 'slow',
  title: 'Battery stays at 0% even when charging',
  aka: ['not charging', 'laptop won’t turn on at all', 'not coming on at all', 'no power', 'battery 0%', 'plugged in not charging', 'battery dead', 'laptop goes off when charger is removed', 'battery not detected'],
  summary: 'The charger is in, but the battery stays at 0%, or the laptop goes off as soon as you remove the charger. There are 3 possible reasons.',
  causes: ['The battery is dead', 'The charger is faulty', 'The laptop isn’t detecting the battery'],
  fixes: [
    { title: 'Check the battery’s health', steps: [
      'Click Start, type `cmd` and open **Command Prompt**.',
      { t: 'Type exactly this and hit [[Enter]]:', cmd: ['powercfg /batteryreport'] },
      'It tells you where it saved the report. Open that file. If **Full charge capacity** is far below **Design capacity**, the battery is worn out and needs replacing.'
    ]},
    { title: 'Try another charger', steps: [
      'Borrow a charger that fits your laptop and test with it. A bad charger can make a healthy battery look dead.'
    ]},
    { title: 'Reconnect the battery', level: 3, warn: 'Do this with caution, or [let us do it](#/contact).', steps: [
      'Shut down and unplug the charger.',
      'Open the back cover and push the battery connector back in firmly.'
    ]}
  ],
  after: ['Plug in when it gets to around 15–25%. Don’t keep draining it to 0–5%. Leaving the charger in at 100% is fine on modern laptops.'],
  related: ['overheating']
},
{
  id: 'overheating', cat: 'slow',
  title: 'Fan is loud and the laptop is very hot',
  aka: ['overheating', 'fan noise', 'hot laptop', 'goes off by itself', 'shuts down suddenly'],
  summary: 'The fan runs loud and the laptop is hot to touch. Usually it’s dust in the vents, or an app using too much power.',
  fixes: [
    { title: 'Quick checks', steps: [
      'Put the laptop on a table or hard surface. A bed or pillow blocks the air holes.',
      'Open Task Manager and click **CPU** to sort. End any app using more than 80%.',
      'Blow the air holes with a blower from the outside.',
      'Run a full virus scan. Viruses can work the laptop hard in the background.'
    ]}
  ],
  after: ['If the laptop goes off by itself because of heat, it needs an internal cleaning. [Bring it to us](#/contact).'],
  related: ['slow-laptop']
},
{
  id: 'failing-hard-disk', cat: 'slow', guide: true,
  title: 'Check if your hard disk is dying',
  aka: ['disk 100%', 'hard drive health', 'crystaldiskinfo', 'bad sector', 'has a bad block', 'clicking noise', 'hdd test', 'system diagnostics'],
  summary: 'Signs: the laptop freezes often, Disk stays at 100% in Task Manager, it takes 3 to 5 minutes to start, or the disk makes clicking sounds. Here’s how to confirm.',
  fixes: [
    { title: 'HP laptops: built-in test', steps: [
      'Turn the laptop off.',
      'Turn it on and quickly press [[Esc]] about 5 times.',
      'You’ll see a menu: System Information, System Diagnostics, Boot Menu, BIOS Setup. Press [[F2]] for **System Diagnostics**.',
      'Choose **Hard Drive** and run the test.'
    ]},
    { title: 'Check the error log', steps: [
      'Click Start, type `Event Viewer` and open it. Click **Windows Logs → System**.',
      { t: 'Look for red **Error** lines where Source says **disk**. If it says “has a bad block”, the disk is faulty.', img: 'slow-14', cap: '“has a bad block”' }
    ]},
    { title: 'Use CrystalDiskInfo', steps: [
      'Install CrystalDiskInfo (free). If the laptop won’t start, remove the disk and connect it to another laptop with a SATA-to-USB cable.',
      { t: 'Read the health box. **Good**: fine. **Caution**: copy your files now. **Bad**: replace it.', img: 'slow-13', cap: 'Health status: Caution' }
    ]}
  ],
  after: ['Changing a dying disk to an SSD fixes the problem and makes the laptop much faster. Tools like AOMEI Partition Assistant can copy everything across, so you keep your apps and desktop.'],
  related: ['slow-laptop', 'disk-read-error']
},

/* ═══════════════ WIFI AND INTERNET ═══════════════ */
{
  id: 'wifi-not-showing', cat: 'network',
  title: 'WiFi not showing',
  aka: ['no wifi networks', 'wifi icon missing', 'wifi greyed out', 'can’t see wifi', 'wireless not working', 'airplane mode stuck'],
  summary: 'No WiFi networks show up, or the WiFi icon is missing or grey.',
  causes: ['Airplane mode is on', 'The WiFi is switched off in Device Manager', 'The WiFi driver is missing'],
  fixes: [
    { title: 'Turn off airplane mode', steps: [
      { t: 'Click the network icon at the bottom right. Make sure **Airplane mode** is off.', img: 'net-01', cap: 'Airplane mode in quick settings' }
    ]},
    { title: 'Switch the WiFi on in Device Manager', steps: [
      'Press [[Win+X]] and click **Device Manager**.',
      'Click the arrow beside **Network adapters**.',
      { t: 'Right-click the one with **Wireless** or **WiFi** in its name and click **Enable device**.', img: 'net-02', cap: 'Enable device' }
    ]},
    { title: 'Reinstall the WiFi driver', steps: [
      'Find your laptop model: press [[Win+R]], type `dxdiag` and hit [[Enter]]. Look at **System Model**.',
      'On your phone, search Google for “WiFi driver” plus your model. Open your laptop brand’s own website.',
      { t: 'Choose your Windows version and download the WLAN driver. Copy it to the laptop with a flash drive.', img: 'net-03', cap: 'Intel WLAN Driver on HP’s site' },
      'Install it and restart.'
    ]}
  ],
  related: ['no-internet', 'install-drivers']
},
{
  id: 'no-internet', cat: 'network',
  title: 'Connected to WiFi but no internet',
  aka: ['no internet, secured', 'websites won’t load', 'connected but not browsing', 'limited access', 'dns problem'],
  summary: 'The laptop says it’s connected, but nothing loads.',
  see: [{ img: 'net-04', cap: '“No internet, secured”' }],
  fixes: [
    { title: 'Check your data', steps: ['On a phone hotspot? Check that you still have data.'] },
    { title: 'Reconnect', steps: [
      'Click the WiFi icon and click **Disconnect**.',
      'Wait a few seconds, connect again and type the password.'
    ]},
    { title: 'Reset the network settings', steps: [
      'Click Start, type `cmd`, right-click **Command Prompt** and click **Run as administrator**.',
      { t: 'Type these one at a time. Hit [[Enter]] after each:', cmd: ['ipconfig /release', 'ipconfig /renew', 'ipconfig /flushdns', 'netsh winsock reset'] },
      'Restart.'
    ]},
    { title: 'Restart the router', steps: ['If no device on that WiFi has internet, unplug the router for 30 seconds and plug it back.'] }
  ],
  related: ['slow-wifi', 'hotspot']
},
{
  id: 'slow-wifi', cat: 'network',
  title: 'WiFi is slow even with full bars',
  aka: ['slow internet', 'pages load slowly', 'change dns', '8.8.8.8', 'lantern', 'vpn slow'],
  summary: 'The signal is full, but pages take forever to load.',
  causes: ['A VPN like Lantern', 'Too many people on the same WiFi', 'Slow DNS (the internet’s address book)'],
  fixes: [
    { title: 'Uninstall VPNs like Lantern', steps: [
      'Go to **Settings → Apps → Installed apps**. Find Lantern or any VPN and uninstall it.'
    ]},
    { title: 'Switch to Google DNS', steps: [
      'Open **Control Panel → Network and Sharing Center**.',
      'Click your WiFi name, then **Properties**.',
      'Click **Internet Protocol Version 4 (TCP/IPv4)**, then **Properties**.',
      'Choose **Use the following DNS server addresses**. Type `8.8.8.8` in the first box and `8.8.4.4` in the second.',
      'Click **OK**.'
    ]}
  ],
  related: ['no-internet']
},
{
  id: 'hotspot', cat: 'network',
  title: 'Can’t connect to a phone hotspot',
  aka: ['mobile hotspot', 'hotspot not showing', '5ghz', '2.4ghz', 'phone data not connecting'],
  summary: 'The laptop won’t connect to your phone’s hotspot, or can’t see it at all.',
  fixes: [
    { title: 'Laptop can’t see it: switch to 2.4GHz', steps: [
      { t: 'Some laptops can’t see 5GHz hotspots. On your phone, open **Hotspot settings** and change the band to **2.4GHz**.', img: 'net-06', cap: 'Warning that the hotspot is on 5GHz' }
    ]},
    { title: 'Forget it and connect again', steps: [
      { t: 'On the laptop, click the WiFi icon, right-click your hotspot and click **Forget**.', img: 'net-05', cap: 'Forget' },
      'Turn the hotspot off and on, then connect again.',
      'Still failing? Restart both the laptop and the phone.'
    ]}
  ],
  related: ['wifi-not-showing']
},
{
  id: 'lan-not-working', cat: 'network',
  title: 'LAN cable in but no internet',
  aka: ['ethernet not working', 'network cable', 'wired internet'],
  summary: 'You plug in a network cable, but the internet doesn’t work.',
  fixes: [
    { title: 'Try another cable or port', steps: ['Swap the cable, or plug it into another port on the router.'] },
    { title: 'Switch on the LAN adapter', steps: [
      'Open **Device Manager** and click the arrow beside **Network adapters**.',
      'Right-click the one with **Ethernet**, **GbE** or **LAN** in its name and click **Enable device**. If it’s already on, click **Update driver**.'
    ]}
  ],
  related: ['no-internet']
},

/* ═══════════════ VIRUSES ═══════════════ */
{
  id: 'shortcut-virus', cat: 'malware',
  title: 'Shortcut virus: files turned into shortcuts',
  aka: ['files became shortcuts', 'lnk files', 'usb virus', 'pen drive virus', 'folders are shortcuts'],
  summary: 'Your folders on a flash drive turned into shortcuts. Your real files are hidden, not gone.',
  see: [{ img: 'malware-01', cap: 'A shortcut where a folder should be' }],
  warn: 'Don’t click the shortcuts. Clicking them spreads the virus again.',
  fixes: [
    { title: 'Bring your files back', steps: [
      'Click Start, type `cmd`, right-click **Command Prompt** and click **Run as administrator**.',
      'Check your flash drive’s letter in **This PC**, for example **E:**.',
      { t: 'Type this, changing E to your drive’s letter, and hit [[Enter]]. Your files reappear:', cmd: ['attrib -h -r -s /s /d E:\\*.*'], img: 'malware-10', cap: 'The attrib command' },
      { t: 'Delete the shortcuts with:', cmd: ['del E:\\*.lnk'] },
      'Copy your files to the laptop, then format the flash drive.'
    ]},
    { title: 'Scan the laptop', steps: ['Run a full scan with **Windows Security** or **Malwarebytes**.'] }
  ],
  after: ['Scan any flash drive before opening it.'],
  related: ['hidden-files', 'remove-malware']
},
{
  id: 'ground-exe', cat: 'malware',
  title: 'Apps renamed with a “g” in front (gchrome.exe)',
  aka: ['ground.exe', 'gchrome', 'g before file names', 'exe renamed', 'apps not opening'],
  summary: 'App files have an extra “g” in front, so chrome.exe becomes gchrome.exe. This is the ground.exe virus.',
  see: [
    { img: 'malware-03', cap: 'Files renamed with a “g” in front' },
    { img: 'malware-02', cap: 'Ground.exe running in Task Manager' }
  ],
  fixes: [
    { title: 'Remove it in Safe Mode', level: 3, steps: [
      'Start in [Safe Mode](#/p/safe-mode).',
      'Run a full scan with Windows Security, then Malwarebytes. Remove everything they find.',
      'Download **Autoruns** from Microsoft. Untick startup items you don’t recognise.',
      'Rename the affected files by removing the “g”, or reinstall those apps.'
    ]}
  ],
  related: ['remove-malware', 'shortcut-virus']
},
{
  id: 'chrome-managed', cat: 'malware',
  title: 'Chrome says “Managed by your organization”',
  aka: ['browser hijacked', 'questfinder', 'quest finder', 'search redirects', 'fake search engine', 'can’t change homepage'],
  summary: 'Chrome says “This browser is managed by your organization” on your own laptop, and Google has been replaced by Quest Finder. Your browser has been hijacked.',
  see: [
    { img: 'malware-04', cap: '“Managed by your organization”' },
    { img: 'malware-05', cap: 'Quest-Finder as the search engine' }
  ],
  warn: 'Hijackers can see your passwords. After fixing it, change your important passwords.',
  fixes: [
    { title: 'Delete the bad Chrome setting', steps: [
      'Press [[Win+R]], type `regedit` and hit [[Enter]]. Click **Yes**.',
      { t: 'Copy this, paste it into the bar at the top and hit [[Enter]]:', cmd: ['HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Google\\Chrome'], img: 'malware-06', cap: 'The address bar in Registry Editor' },
      'On the right, right-click **ExtensionManifestV2Availability** and click **Delete**.',
      'Close and open Chrome. The message should be gone.',
      'Type `chrome://extensions` in Chrome and remove Quest Finder and anything you don’t know.'
    ]}
  ],
  related: ['remove-malware']
},
{
  id: 'remove-malware', cat: 'malware',
  title: 'Remove a virus',
  aka: ['virus removal', 'pop ups', 'trojan', 'malware', 'infected', 'antivirus scan', 'game download virus', 'oceansofgames'],
  summary: 'Signs: pop-ups, slow startup, files missing or doubled, apps you didn’t install. Many come from cracked games and movie sites.',
  see: [{ img: 'malware-07', cap: 'Windows Security found threats' }],
  fixes: [
    { title: 'Scan with Windows Security', steps: [
      'Click Start, type `Windows Security` and open it.',
      'Click **Virus & threat protection → Scan options**, choose **Full scan** and click **Scan now**. Remove everything it finds.'
    ]},
    { title: 'Run the offline scan', steps: [
      { t: 'In the same Scan options, choose **Microsoft Defender Offline scan** and click **Scan now**. The laptop restarts and scans for about 15 minutes.', img: 'malware-08', cap: 'Offline scan' }
    ]},
    { title: 'Scan in Safe Mode', steps: [
      { t: 'Hold [[Shift]], click **Restart**, then **Troubleshoot → Advanced options → Startup Settings → Restart**.', img: 'malware-09', cap: 'The way to Startup Settings' },
      'Press [[4]]. In Safe Mode, run Windows Security or Malwarebytes again.'
    ]},
    { title: 'Remove apps you didn’t install', steps: [
      'Go to **Settings → Apps → Installed apps**. Sort by install date.',
      'Uninstall anything you don’t recognise. Not sure? Search the name on Google first.'
    ]}
  ],
  after: ['Download games and movies only from known sites. Sites like oceansofgames.com have caused problems for many people.', 'If viruses keep coming back, back up your files and reinstall Windows.'],
  related: ['secure-windows', 'shortcut-virus', 'chrome-managed']
},
{
  id: 'secure-windows', cat: 'malware', guide: true,
  title: 'Protect your laptop from viruses',
  aka: ['security settings', 'core isolation', 'memory integrity', 'turn off autoplay', 'prevent virus'],
  summary: 'After cleaning a virus, these settings help keep the next one out.',
  fixes: [
    { title: 'Turn on Memory integrity', steps: [
      { t: 'Open **Windows Security → Device security → Core isolation**. Switch **Memory integrity** on and restart.', img: 'malware-11', cap: 'Memory integrity on' }
    ]},
    { title: 'Stop flash drives from running things', steps: [
      'Go to **Settings → Bluetooth & devices → AutoPlay** and switch it off.'
    ]},
    { title: 'Keep Windows updated', steps: [
      'Go to **Settings → Windows Update** and install what’s there. Updates close the holes viruses use.'
    ]}
  ],
  related: ['remove-malware']
},

/* ═══════════════ USB DRIVES AND DISKS ═══════════════ */
{
  id: 'usb-not-showing', cat: 'storage',
  title: 'Flash drive not showing',
  aka: ['pen drive not detected', 'usb not showing', 'flash not reading', 'no drive letter', 'external drive missing', 'unallocated'],
  summary: 'You plug in a flash drive but it doesn’t show in This PC.',
  fixes: [
    { title: 'Try another port and another laptop', steps: [
      'Plug it into a different USB port.',
      'Test it on another laptop. If it doesn’t work there either, the flash drive is faulty.'
    ]},
    { title: 'Give it a letter', steps: [
      'Press [[Win+X]] and click **Disk Management**.',
      { t: 'Find your flash drive at the bottom. Right-click it and click **Change Drive Letter and Paths**.', img: 'storage-04', cap: 'Change Drive Letter and Paths' },
      { t: 'Click **Add**, pick a letter and click **OK**.', img: 'storage-05', cap: 'Choose a letter' },
      'If it says **Unallocated**, right-click it and click **New Simple Volume**. This erases it.'
    ]},
    { title: 'Update the USB drivers', steps: [
      'Open **Device Manager** and click the arrow beside **Universal Serial Bus controllers**.',
      'Right-click each item and click **Update driver**. Restart.'
    ]}
  ],
  related: ['external-hdd-not-showing', 'usb-cant-open']
},
{
  id: 'usb-cant-open', cat: 'storage',
  title: 'Flash drive shows up but won’t open',
  aka: ['usb corrupted', 'please insert a disk', 'diskpart clean', 'format usb command prompt', 'usb shows 0 bytes'],
  summary: 'The flash drive shows, but files won’t open, copying fails, or it asks you to insert a disk.',
  fixes: [
    { title: 'Check it for errors', steps: [
      { t: 'Open Command Prompt as administrator and type this. Change E to your drive’s letter:', cmd: ['chkdsk E: /f'] },
      'Files still won’t open? Try recovering them with **Recuva** (free) before the next fix.'
    ]},
    { title: 'Wipe it and start again', level: 3, warn: 'This erases the flash drive. Pick the right disk number. Picking your laptop’s disk would erase Windows.', steps: [
      'Open Command Prompt as administrator. Type `diskpart` and hit [[Enter]].',
      { t: 'Type `list disk`. Find your flash drive by its size and note its number.', img: 'storage-06', cap: 'list disk, select disk, clean' },
      { t: 'Type these one at a time. Change X to your number:', cmd: ['select disk X', 'clean', 'create partition primary', 'format fs=exfat quick', 'assign'] }
    ]}
  ],
  related: ['usb-read-only', 'usb-not-showing']
},
{
  id: 'usb-read-only', cat: 'storage',
  title: '“The disk is write-protected”',
  aka: ['write protected', 'read only usb', 'can’t copy to usb', 'can’t delete from flash'],
  summary: 'You can open files on the flash drive, but you can’t copy, delete or save anything.',
  fixes: [
    { title: 'Check for a lock switch', steps: ['Some flash drives and SD cards have a tiny switch on the side. Slide it the other way.'] },
    { title: 'Remove the lock with diskpart', steps: [
      'Open Command Prompt as administrator. Type `diskpart`, then `list disk`, and find your flash drive’s number.',
      { t: 'Type these, changing X to that number:', cmd: ['select disk X', 'attributes disk clear readonly', 'exit'] }
    ]}
  ],
  related: ['usb-cant-open']
},
{
  id: 'file-too-large', cat: 'storage',
  title: '“File too large” when copying to a flash drive',
  aka: ['fat32 4gb limit', 'file is too large for the destination file system', 'can’t copy movie to usb', 'iso too big', 'not enough space on usb', 'exfat', 'ntfs'],
  summary: 'The flash drive has space, but won’t take a big file. Drives set up as FAT32 can’t hold any single file of 4GB or more.',
  see: [{ img: 'storage-07', cap: '“The file is too large for the destination file system”' }],
  fixes: [
    { title: 'Check the drive’s format', steps: [
      { t: 'In **This PC**, right-click the drive and click **Properties**. Look at **File system**.', img: 'storage-01', cap: 'File system: exFAT' },
      { t: 'FAT32 works everywhere but stops at 4GB files. exFAT has no limit and works on Windows and Mac. NTFS has no limit but is for Windows only.', img: 'storage-02', cap: 'NTFS works on Windows, FAT32 on both' }
    ]},
    { title: 'Change it to exFAT', warn: 'This erases the drive. Copy your files off first.', steps: [
      { t: 'Right-click the drive in This PC and click **Format**. Set **File system** to **exFAT**, tick **Quick Format** and click **Start**.', img: 'storage-03', cap: 'Format as exFAT' },
      'When it says **Format Complete**, you can copy files of any size.'
    ]}
  ],
  related: ['usb-cant-open']
},
{
  id: 'external-hdd-not-showing', cat: 'storage',
  title: 'External hard disk works elsewhere but not on your laptop',
  aka: ['external hdd not detected', 'hard disk case', 'sata to usb cable', 'hp 12th gen'],
  summary: 'The external disk works on other laptops but not yours. Some laptops, like the HP Notebook i3 12th Gen, don’t work with certain disk cases and cables.',
  fixes: [
    { title: 'Change the case or cable', steps: [
      { t: 'Try a different case or cable. Western Digital (WD) cases work well.', img: 'storage-08', cap: 'A WD external disk' }
    ]},
    { title: 'Check Disk Management', steps: [
      'If the light comes on but nothing shows, follow [Flash drive not showing](#/p/usb-not-showing).'
    ]}
  ],
  related: ['usb-not-showing', 'initialize-disk']
},
{
  id: 'initialize-disk', cat: 'storage',
  title: '“You must initialize a disk”',
  aka: ['initialize disk', 'mbr or gpt', 'disk not initialized', 'new hard drive not showing'],
  summary: 'A new disk shows in Disk Management as “Not Initialized”.',
  fixes: [
    { title: 'Set up the new disk', warn: 'Only do this for a new or empty disk.', steps: [
      'Open **Disk Management**.',
      { t: 'Right-click the disk, click **Initialize Disk** and choose **GPT**. Choose MBR only for old laptops.', img: 'storage-09', cap: 'Initialize Disk' },
      'Right-click the empty space and click **New Simple Volume**.'
    ]}
  ],
  related: ['external-hdd-not-showing']
},

/* ═══════════════ SOUND, SCREEN, CAMERA ═══════════════ */
{
  id: 'no-sound', cat: 'drivers',
  title: 'No sound from the speakers',
  aka: ['audio not working', 'speakers not working', 'sound gone after update', 'red x on speaker', 'no audio'],
  summary: 'No sound comes out, or it stopped after an update.',
  see: [{ img: 'drivers-01', cap: 'Speaker icon with a red X' }],
  fixes: [
    { title: 'Choose the right speaker', steps: [
      'Right-click the speaker icon and click **Sound settings**.',
      'Under **Output**, choose **Speakers**, not Headphones or HDMI.'
    ]},
    { title: 'Reinstall the sound driver', steps: [
      'Press [[Win+X]] and click **Device Manager**.',
      'Click the arrow beside **Sound, video and game controllers**.',
      'Right-click **Realtek Audio** (or similar) and click **Uninstall device**. Restart. Windows puts it back.'
    ]},
    { title: 'Get the driver from your laptop brand', steps: [
      'Find your model with [[Win+R]] and `dxdiag`. Download the **Audio** driver from your brand’s website. See [Install the right drivers](#/p/install-drivers).'
    ]}
  ],
  related: ['bt-no-audio', 'install-drivers']
},
{
  id: 'camera', cat: 'drivers',
  title: 'Camera not working or shows black',
  aka: ['webcam not working', 'camera black', 'zoom camera not showing', 'no camera found', 'camera cover'],
  summary: 'The camera shows black or doesn’t work in Zoom or Teams.',
  fixes: [
    { title: 'Check the camera cover', steps: [
      'Many laptops have a small slider over the camera. Make sure you haven’t pushed it over the lens.',
      'Some laptops have a camera key on the keyboard with a camera and a line through it. Press it once.'
    ]},
    { title: 'Allow apps to use the camera', steps: [
      'Go to **Settings → Privacy & security → Camera**.',
      'Switch on **Camera access** and **Let apps access your camera**.'
    ]},
    { title: 'Reinstall the camera driver', steps: [
      'Open **Device Manager**, click the arrow beside **Cameras**, right-click your camera and click **Uninstall device**. Restart.'
    ]}
  ],
  related: ['install-drivers']
},
{
  id: 'brightness', cat: 'drivers',
  title: 'Brightness keys don’t work',
  aka: ['can’t change brightness', 'brightness slider missing', 'screen too bright', 'fn keys not working', 'resolution wrong'],
  summary: 'The brightness keys do nothing, the slider is missing, or the screen looks stretched.',
  fixes: [
    { title: 'Install the screen driver', steps: [
      'Find your model: press [[Win+R]], type `dxdiag`, hit [[Enter]].',
      'On your brand’s website, download the **Graphics** driver (Intel, NVIDIA or AMD) for your model.',
      'Install it and restart.'
    ]}
  ],
  related: ['install-drivers']
},
{
  id: 'unknown-device', cat: 'drivers',
  title: 'Yellow mark in Device Manager',
  aka: ['yellow exclamation', 'unknown device', 'missing driver', 'other devices', 'code 43'],
  summary: 'A yellow ! in Device Manager means a driver is missing or broken.',
  see: [{ img: 'drivers-02', cap: 'Unknown devices with yellow marks' }],
  fixes: [
    { title: 'Let Windows look for it', steps: [
      'Open **Device Manager**. Right-click the item with the yellow ! and click **Update driver → Search automatically**.'
    ]},
    { title: 'Search for it by its ID', steps: [
      'Right-click it, click **Properties → Details** and choose **Hardware Ids**.',
      'Copy the first line and search it on Google or the [Microsoft Update Catalog](https://www.catalog.update.microsoft.com).'
    ]},
    { title: 'If the wrong driver is installed', steps: [
      'Right-click the device, click **Uninstall device** and restart. Then install the right one from your brand’s website.'
    ]}
  ],
  related: ['install-drivers']
},
{
  id: 'install-drivers', cat: 'drivers', guide: true,
  title: 'Install the right drivers',
  aka: ['download drivers', 'driver update', 'dxdiag', 'which driver do i need', 'drivers after windows install', 'no internet after installing windows'],
  summary: 'A driver is a small program that makes a part of your laptop work. When one is missing, things like sound, WiFi or brightness stop working.',
  fixes: [
    { title: 'Windows Update', when: 'Works best right after installing Windows.', steps: [
      'Go to **Settings → Windows Update → Check for updates**.',
      { t: 'Click **Advanced options → Optional updates** and install the drivers listed there too.', img: 'drivers-03', cap: 'Driver updates' }
    ]},
    { title: 'From your laptop brand’s website', when: 'The most reliable way.', steps: [
      { t: 'Press [[Win+R]], type `dxdiag`, hit [[Enter]]. Note the **System Model**.', img: 'drivers-04', cap: 'System Model' },
      { t: 'Open your brand’s support site, like [support.hp.com](https://support.hp.com), [dell.com/support](https://www.dell.com/support) or [support.lenovo.com](https://support.lenovo.com). Click **Software and Drivers**.', img: 'drivers-05', cap: 'Software and Drivers on HP' },
      { t: 'Search your model. Download what you need: **Graphics** for brightness, **Audio** for sound, **Network** for WiFi, **Chipset** if it overheats.', img: 'drivers-06', cap: 'Driver list' },
      'Some come as a ZIP. Extract it first, then run the setup.',
      'No internet on the laptop? Download the WiFi driver on another device and copy it over with a flash drive.'
    ]},
    { title: 'Microsoft Update Catalog', level: 3, when: 'When your brand’s site doesn’t have it.', steps: [
      { t: 'Open [catalog.update.microsoft.com](https://www.catalog.update.microsoft.com) and search the driver name.', img: 'drivers-08', cap: 'Microsoft Update Catalog' },
      'Download the one for your Windows. If it’s a .cab file, extract it, then in Device Manager choose **Update driver → Browse my computer**.'
    ]}
  ],
  related: ['unknown-device', 'wifi-not-showing']
},

/* ═══════════════ BLUETOOTH ═══════════════ */
{
  id: 'bt-wont-turn-on', cat: 'bluetooth',
  title: 'Bluetooth won’t turn on or is missing',
  aka: ['bluetooth greyed out', 'no bluetooth button', 'bluetooth disappeared', 'bluetooth driver'],
  summary: 'The Bluetooth button is missing or grey.',
  see: [{ img: 'bt-01', cap: 'No Bluetooth button in quick settings' }],
  fixes: [
    { title: 'Switch it on in Device Manager', steps: [
      'Press [[Win+X]] and click **Device Manager**.',
      { t: 'Click the arrow beside **Bluetooth**. Right-click your Bluetooth and click **Enable device**.', img: 'bt-02', cap: 'Enable device' },
      'Don’t see it? Click **View → Show hidden devices**.'
    ]},
    { title: 'Reinstall the Bluetooth driver', steps: [
      'Find your model: type `dxdiag` in the Start menu.',
      { t: 'On your phone, search “Bluetooth driver” plus your model. Open your brand’s website, choose your Windows version and download it.', img: 'bt-03', cap: 'Search, choose Windows, download' },
      'Install and restart.'
    ]},
    { title: 'No Bluetooth at all?', steps: ['Some cheaper laptops don’t have it. A USB Bluetooth adapter is cheap and works as soon as you plug it in.'] }
  ],
  related: ['bt-pairing']
},
{
  id: 'bt-pairing', cat: 'bluetooth',
  title: 'Bluetooth device won’t connect',
  aka: ['can’t pair', 'pairing failed', 'earbuds won’t connect', 'mouse won’t connect'],
  summary: 'The laptop sees the device, but connecting fails.',
  fixes: [
    { title: 'Connect again from scratch', steps: [
      'Put the device in pairing mode. Usually you hold its button until a light flashes.',
      'On the laptop, go to **Settings → Bluetooth & devices**. Switch Bluetooth off, wait a few seconds, switch it on.',
      'If it was connected before, click it, click **Remove device**, then add it again.'
    ]}
  ],
  related: ['bt-no-audio']
},
{
  id: 'bt-no-audio', cat: 'bluetooth',
  title: 'Earbuds connected but sound comes from the laptop',
  aka: ['airpods no sound', 'headphones connected no audio', 'bluetooth no sound', 'output device'],
  summary: 'Your earbuds show as connected, but the sound still comes from the laptop.',
  fixes: [
    { title: 'Switch the sound to your earbuds', steps: [
      { t: 'Click the sound icon at the bottom right. Click the small arrow beside the volume bar, then pick your earbuds.', img: 'bt-04', cap: 'Sound icon, then the arrow, then your earbuds' }
    ]}
  ],
  related: ['no-sound']
},
{
  id: 'bt-file-transfer', cat: 'bluetooth', guide: true,
  title: 'Send files to a phone with Bluetooth',
  aka: ['bluetooth file transfer', 'fsquirt', 'send file to phone'],
  summary: 'You’re connected to a phone but can’t send or receive files.',
  fixes: [
    { title: 'Use Bluetooth file transfer', steps: [
      { t: 'Go to **Settings → Bluetooth & devices → Devices** and click **Send or receive files via Bluetooth**.', img: 'bt-05', cap: 'Send or receive files via Bluetooth' },
      'Click **Send files** or **Receive files**.',
      'Shortcut: press [[Win+R]], type `fsquirt`, hit [[Enter]].'
    ]}
  ],
  related: ['bt-pairing']
},

/* ═══════════════ FILES AND FOLDERS ═══════════════ */
{
  id: 'hidden-files', cat: 'files',
  title: 'Folder looks empty but space is used',
  aka: ['files not showing', 'hidden files', 'usb looks empty', 'files disappeared', 'show hidden items'],
  summary: 'A folder or flash drive looks empty, but you know your files are there.',
  fixes: [
    { title: 'Show hidden files', steps: [
      'Open the folder.',
      { t: 'Click **View → Show → Hidden items**. Your files should appear.', img: 'files-01', cap: 'View, Show, Hidden items' }
    ]},
    { title: 'Unhide them with a command', steps: [
      'Press [[Win+R]], type `cmd`, hit [[Enter]].',
      { t: 'Type this, changing E to the drive’s letter, and hit [[Enter]]:', cmd: ['attrib -h -r -s /s /d E:\\*.*'] }
    ]}
  ],
  related: ['shortcut-virus']
},
{
  id: 'cant-delete-file', cat: 'files',
  title: 'Can’t delete a file',
  aka: ['file in use', 'the action can’t be completed because the file is open', 'folder in use'],
  summary: 'Windows won’t delete it and says it’s open in another program.',
  see: [{ img: 'files-02', cap: '“File in use”' }],
  fixes: [
    { title: 'Close the app using it', steps: [
      'Press [[Ctrl+Shift+Esc]] to open Task Manager.',
      'Close the app that has the file open, like Word. Try deleting again.'
    ]},
    { title: 'Delete it with a command', steps: [
      'Open Command Prompt as administrator.',
      { t: 'For a file:', cmd: ['del /f /q "C:\\path\\to\\file.txt"'] },
      { t: 'For a folder:', cmd: ['rmdir /s /q "C:\\path\\to\\folder"'] }
    ]},
    { title: 'Says you need permission?', steps: ['Follow [“Access denied”](#/p/access-denied).'] }
  ],
  related: ['access-denied']
},
{
  id: 'access-denied', cat: 'files',
  title: '“Access denied” on a folder',
  aka: ['you need permission', 'take ownership', 'permission denied', 'windows.old', 'full control'],
  summary: 'Windows says you don’t have permission to open a folder on your own laptop. It often happens with folders copied from another laptop.',
  fixes: [
    { title: 'Make yourself the owner', steps: [
      { t: 'Right-click the folder, click **Properties**, open **Security** and click **Advanced**.', img: 'files-03', cap: 'Properties, Security, Advanced' },
      { t: 'Beside **Owner**, click **Change**, then **Advanced**.', img: 'files-04', cap: 'Change, then Advanced' },
      { t: 'Click **Find Now**. Pick your name and click **OK**.', img: 'files-05', cap: 'Find Now' },
      'Tick **Replace owner on subcontainers and objects**. Click **OK** on every window.'
    ]},
    { title: 'Give yourself full control', steps: [
      'Back on **Security**, click **Edit**. Pick your name, tick **Full control** and click **OK**.'
    ]}
  ],
  related: ['cant-delete-file']
},
{
  id: 'path-too-long', cat: 'files',
  title: '“Destination path too long”',
  aka: ['file name too long', 'path too long', 'can’t move file'],
  summary: 'You can’t move or delete something because its name, plus the folders it’s in, is too long.',
  see: [{ img: 'files-06', cap: '“Destination Path Too Long”' }],
  fixes: [
    { title: 'Shorten the folder names', steps: ['Rename the folders it’s in to short names, starting from the top one. Then try again.'] }
  ],
  related: ['cant-delete-file']
},
{
  id: 'corrupt-file', cat: 'files',
  title: 'File is corrupt and won’t open',
  aka: ['file is corrupt and cannot be opened', 'damaged file', 'word document won’t open', 'excel corrupt'],
  summary: 'A file says it’s corrupt or damaged.',
  see: [{ img: 'files-07', cap: '“The file is corrupt and cannot be opened”' }],
  fixes: [
    { title: 'Use Open and Repair', steps: [
      'In Word or Excel, click **File → Open → Browse**.',
      'Click your file once. Click the small arrow beside **Open** and choose **Open and Repair**.'
    ]},
    { title: 'Get an older copy', steps: [
      'Right-click the file, click **Properties** and open **Previous Versions**. Pick one and click **Restore**.'
    ]},
    { title: 'Try another app', steps: ['Open documents with LibreOffice, and videos with VLC.'] }
  ],
  related: ['office-alternatives']
},
{
  id: 'files-disappearing', cat: 'files',
  title: 'Files disappear after restart',
  aka: ['files vanish', 'desktop resets', 'corrupt profile', 'onedrive moved my files'],
  summary: 'You save files, but they’re gone after a restart.',
  fixes: [
    { title: 'Check OneDrive', steps: ['Open OneDrive settings and see which folders it backs up. Your files may have moved there.'] },
    { title: 'Check the disk', steps: ['Press [[Win+E]]. Right-click **Local Disk (C:)**, click **Properties → Tools → Check**.'] },
    { title: 'Try a new user account', steps: [
      'Go to **Settings → Accounts → Other users → Add account**. Choose **I don’t have this person’s sign-in information**, then **Add a user without a Microsoft account**.',
      'Log in to it. If files stay there, your old account is damaged. Move your files across.'
    ]}
  ],
  related: ['hidden-files']
},

{
  id: 'deleted-files', cat: 'files',
  title: 'Deleted a file by mistake',
  aka: ['recover deleted files', 'restore deleted file', 'accidentally deleted', 'deleted my assignment', 'lost files', 'emptied recycle bin', 'shift delete', 'deleted from flash drive', 'get back deleted files', 'recycle bin', 'recuva'],
  summary: 'You deleted a file, a folder or your assignment. Don’t panic. Deleted files usually stay on the laptop until something new is saved over them. Start with the easiest fix.',
  warn: 'Until you get it back, don’t save, download or install anything on that drive. New files can write over the deleted one.',
  fixes: [
    { title: 'Press Undo straight away', when: 'Only works if you just deleted it.', steps: [
      'Stay in the same folder and press [[Ctrl+Z]]. The file comes back.'
    ]},
    { title: 'Check the Recycle Bin', steps: [
      'Double-click **Recycle Bin** on the desktop.',
      'Find your file. If there are many, click **Date deleted** at the top to see the newest first, or type its name in the search box at the top right.',
      'Right-click it and click **Restore**. It goes back to the folder it was in.'
    ]},
    { title: 'Check OneDrive or Google Drive', when: 'If the file was in a folder that syncs to the cloud.', steps: [
      'OneDrive: open [onedrive.live.com](https://onedrive.live.com) on your phone and sign in. Click **Recycle bin**, select the file and click **Restore**.',
      'Google Drive: open [drive.google.com](https://drive.google.com), click **Trash**, right-click the file and click **Restore**.',
      'Both keep deleted files for about 30 days.'
    ]},
    { title: 'Restore an older version of the folder', steps: [
      'Open the folder the file was in. Right-click an empty space and click **Properties**.',
      'Open **Previous Versions**. If you see dates there, pick one from before you deleted the file and click **Open** to look inside.',
      'Found it? Copy it out to the desktop.',
      'If the list is empty, this backup was never switched on. Go to the next fix.'
    ]},
    { title: 'Use a recovery app', when: 'For files deleted with Shift + Delete, emptied from the Recycle Bin, or deleted from a flash drive. Flash drives don’t have a Recycle Bin.', steps: [
      'On your phone or another laptop, download **Recuva** (free) from [ccleaner.com/recuva](https://www.ccleaner.com/recuva). If you can, install it on a different drive or a flash drive, not the one you lost the file from.',
      'Open Recuva. Choose the type of file, like **Documents** or **Pictures**, then choose where it was. For a flash drive, pick **On my media card or iPod**.',
      'Tick **Enable Deep Scan** and click **Start**. It can take a while.',
      'You’ll see a list. Green dots mean the file can be recovered. Tick yours and click **Recover**.',
      'Save the recovered file to a **different** drive than the one it came from. A flash drive works.'
    ]}
  ],
  after: ['Keep important work in OneDrive or Google Drive. Deleted files stay in their trash for about 30 days, even if the laptop dies.', 'If a flash drive’s files vanished without you deleting them, it may be the [shortcut virus](#/p/shortcut-virus) hiding them.'],
  related: ['hidden-files', 'shortcut-virus', 'corrupt-file']
},

/* ═══════════════ INSTALLING WINDOWS ═══════════════ */
{
  id: 'install-windows-11', cat: 'windows', guide: true,
  title: 'Install Windows 11 from a USB',
  aka: ['reinstall windows', 'format laptop', 'rufus', 'bootable usb', 'fresh install', 'clean install', 'windows iso'],
  summary: 'A fresh install fixes most deep problems and removes viruses. You need an 8GB flash drive, another computer and about an hour.',
  warn: 'This can erase everything. Back up your files first.',
  fixes: [
    { title: 'Make the USB', steps: [
      'On a working computer, download **Rufus** from [rufus.ie](https://rufus.ie) and the Windows 11 ISO from [microsoft.com/software-download/windows11](https://www.microsoft.com/software-download/windows11).',
      'Plug in a flash drive of at least 8GB. It will be erased.',
      { t: 'Open Rufus. Under **Device**, pick your flash drive. Click **SELECT** and choose the Windows file you downloaded.', img: 'windows-01', cap: 'Rufus: choose the drive, then SELECT' },
      { t: 'Click **Start**. Tick all three: **Remove requirement for Secure Boot and TPM 2.0**, **Remove requirement for an online Microsoft account**, **Disable BitLocker**. Click **OK**.', img: 'windows-02', cap: 'Tick these options' },
      'Wait until Rufus says **READY**.'
    ]},
    { title: 'Start the laptop from the USB', steps: [
      { t: 'Plug the USB into the laptop. Turn it on and keep tapping the boot key for your brand:', table: 'bootkeys' },
      'Pick your USB drive and hit [[Enter]].'
    ]},
    { title: 'Install', steps: [
      { t: 'Choose your language and click **Next**, then **Install now**.', img: 'windows-03', cap: 'Language screen' },
      'Asked for a product key? Click **I don’t have a product key**. Choose **Windows 11 Home** or **Pro**.',
      { t: 'Click **Custom: Install Windows only (advanced)**.', img: 'windows-04', cap: 'Custom: Install Windows only' },
      'To start clean, delete every partition (the sections of the disk), click the **Unallocated space** and click **Next**. To keep old files, pick **C:** without deleting. They’ll be saved in a folder called Windows.old.',
      'See an error here? Check [“Windows cannot be installed to this disk”](#/p/cant-install-partition) or [No drives showing](#/p/no-drives-in-setup).'
    ]},
    { title: 'Set it up', steps: [
      'Choose your region and keyboard. You can skip WiFi.',
      { t: 'Type your name. A password is optional.', img: 'windows-08', cap: 'Who’s going to use this device?' },
      { t: 'On the privacy screen, switch off location, diagnostic data and ads.', img: 'windows-09', cap: 'Privacy settings' }
    ]},
    { title: 'After it’s installed', steps: [
      { t: 'Connect to WiFi. Click Start, type `Check for updates` and install everything. Restart.', img: 'windows-10', cap: 'Windows Update' },
      'Something still not working, like sound? [Get the driver from your brand’s site](#/p/install-drivers).',
      'Install Visual C++ Redistributable and DirectX. Many apps and games need them. See [“MSVCP110.dll is missing”](#/p/missing-dll).'
    ]}
  ],
  related: ['cant-install-partition', 'no-drives-in-setup', 'install-drivers']
},
{
  id: 'cant-install-partition', cat: 'windows',
  title: '“Windows cannot be installed to this disk”',
  aka: ['mbr partition table', 'gpt partition style', 'can’t install on selected partition'],
  summary: 'Setup refuses to install because the disk style doesn’t match the USB.',
  see: [
    { img: 'windows-05', cap: '“The selected disk has an MBR partition table”' },
    { img: 'windows-06', cap: '“The selected disk is of the GPT partition style”' }
  ],
  fixes: [
    { title: 'Delete the partitions', level: 3, warn: 'This erases the whole disk.', steps: [
      'Click each partition on the disk and click **Delete** until there’s only **Unallocated space**.',
      'Click the unallocated space and click **Next**. Setup fixes the style by itself.'
    ]},
    { title: 'Remake the USB', steps: ['In Rufus, set **Partition scheme** to **GPT** (for most laptops from 2016 on) and make the USB again.'] }
  ],
  related: ['install-windows-11']
},
{
  id: 'no-drives-in-setup', cat: 'windows',
  title: 'No drives showing during Windows setup',
  aka: ['no partitions', 'load driver', 'rst driver', 'intel rapid storage', 'we couldn’t find any drives', '11th gen'],
  summary: 'Setup shows no disk to install on. It’s common on Intel laptops from the 11th generation up, which need an extra driver.',
  see: [{ img: 'windows-07', cap: '“No device drivers were found”' }],
  fixes: [
    { title: 'Load the storage driver', level: 3, steps: [
      'On another computer, download the **Intel Rapid Storage Technology (RST)** driver for your laptop from your brand’s website.',
      'Extract it onto the same USB you’re installing from.',
      'On the screen with no drives, click **Load driver → Browse** and open that folder. Your drives appear.'
    ]}
  ],
  related: ['install-windows-11']
},
{
  id: 'missing-dll', cat: 'windows',
  title: '“MSVCP110.dll is missing”',
  aka: ['dll missing', 'vcruntime140.dll', 'the program can’t start because', 'visual c++', 'game won’t open'],
  summary: 'An app or game won’t open because a .dll file is missing. Windows needs a free Microsoft package called Visual C++.',
  see: [{ img: 'windows-11', cap: '“MSVCP110.dll is missing”' }],
  fixes: [
    { title: 'Install Visual C++', steps: [
      'Search “Visual C++ Redistributable” on Google and open the Microsoft page.',
      'Download and install both the **x64** and **x86** versions. Restart.'
    ]}
  ],
  related: ['install-windows-11']
},

/* ═══════════════ MICROSOFT OFFICE ═══════════════ */
{
  id: 'install-office', cat: 'office',
  title: 'Get Microsoft Office free as a student',
  aka: ['install word', 'install excel', 'microsoft office', 'office 2021', 'microsoft 365', 'office for mac', 'activate office', 'free office'],
  summary: 'Microsoft gives Word, Excel and PowerPoint free to students through their school email. No credit card needed.',
  platforms: true,
  fixes: [
    { title: 'Check that your school email works', steps: [
      'On your phone or laptop, open [Office 365 Education](https://www.microsoft.com/en-us/education/products/office).',
      'Type your school email (for KNUST, your student email) and click **Get started**.',
      'If it says you’re eligible, create your account. If not, ask your school’s IT office.'
    ]},
    { title: 'Install on Windows', platform: 'windows', steps: [
      { t: 'Check if your Windows is 64-bit: right-click **This PC → Properties**. Look at **System type**.', img: 'office-01', cap: 'System type: 64-bit' },
      { t: 'Remove any old Office: **Control Panel → Uninstall a program**, then uninstall every Microsoft Office.', img: 'office-02', cap: 'Uninstall old Office' },
      'Go to [office.com](https://www.office.com) and sign in with your school email.',
      'Click **Install apps → Microsoft 365 apps**. Run the file. It takes 10 to 15 minutes.',
      'Open Word and sign in with the same email. That activates it.'
    ]},
    { title: 'Install on a Mac', platform: 'mac', steps: [
      'Go to [office.com](https://www.office.com) and sign in with your school email.',
      'Click **Install apps**. Open the downloaded file and follow the steps.',
      'Open Word and sign in with the same email.'
    ]}
  ],
  after: ['No school email? Use [Office on the web](https://www.office.com) free with any Microsoft account, or [LibreOffice](#/p/office-alternatives).'],
  related: ['office-install-failed', 'office-alternatives']
},
{
  id: 'office-install-failed', cat: 'office',
  title: 'Office won’t install or stops at 2%',
  aka: ['couldn’t install', 'error code 30050', 'this app can’t run on your pc', 's mode', 'office stuck'],
  summary: '“Couldn’t install”, a progress bar that won’t move, or “This app can’t run on your PC”.',
  see: [{ img: 'office-04', cap: '“Couldn’t install”' }],
  fixes: [
    { title: '“This app can’t run on your PC”', steps: [
      'You downloaded the 64-bit version on a 32-bit laptop. Download the 32-bit one. Snapdragon (ARM) laptops need the ARM version.'
    ]},
    { title: 'Delete leftover Office files', steps: [
      { t: 'Press [[Win+R]], type this and hit [[Enter]]:', cmd: ['%localappdata%\\Microsoft\\Office'] },
      'Delete everything in the folder that opens, then try again.'
    ]},
    { title: 'Use Microsoft’s repair tool', steps: [
      'Search “Microsoft Support and Recovery Assistant” and download it from Microsoft. Run it and choose Office.'
    ]},
    { title: 'Leave S Mode', steps: [
      'Go to **Settings → System → Activation** and click **Switch out of S mode**.'
    ]}
  ],
  related: ['install-office', 'office-alternatives']
},
{
  id: 'office-alternatives', cat: 'office', guide: true,
  title: 'Free apps that open Word and Excel files',
  aka: ['libreoffice', 'google docs', 'wps office', 'free word', 'open docx without office'],
  summary: 'If Office won’t install, these free apps open and save Word, Excel and PowerPoint files.',
  fixes: [
    { title: 'LibreOffice', steps: [
      { t: 'Free and works without internet. Opens .docx, .xlsx and .pptx. Download from [libreoffice.org](https://www.libreoffice.org).', img: 'office-07', cap: 'LibreOffice' }
    ]},
    { title: 'Online options', steps: [
      '**Google Docs** at [docs.google.com](https://docs.google.com). Free, needs internet.',
      '**Office on the web** at [office.com](https://www.office.com). Free with any Microsoft account.'
    ]}
  ],
  related: ['install-office']
}
];
