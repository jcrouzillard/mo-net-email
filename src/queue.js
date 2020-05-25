import 'dotenv/config';

import Queue from './app/lib/Queue';
import RegistrationMail from './app/jobs/RegistrationMail';
import FileNetReport from './app/jobs/FileNetReport';
import MonitorNet from './app/jobs/MonitorNetSpeed';

Queue.process();