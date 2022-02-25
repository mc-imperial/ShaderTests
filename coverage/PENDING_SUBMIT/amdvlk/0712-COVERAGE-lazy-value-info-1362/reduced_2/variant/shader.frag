#version 320 es

precision highp int;

precision highp float;

void main()
{
 float GLF_live3sums[9] = float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
 int GLF_live3sum_index = 1;
 int GLF_live3_looplimiter7 = 1;
 for(int GLF_live3cols = 1; true; 1)
  {
   if(GLF_live3_looplimiter7 >= 4)
    {
     break;
    }
   GLF_live3_looplimiter7 ++;
   int GLF_live3_looplimiter6 = 1;
   for(int GLF_live3rows = 2; true; GLF_live3rows ++)
    {
     if(GLF_live3_looplimiter6 >= 4)
      {
       break;
      }
     GLF_live3_looplimiter6 ++;
     int GLF_live3_looplimiter4 = 1;
     for(int GLF_live3r = 1; 1 < GLF_live3rows; 1)
      {
       if(GLF_live3_looplimiter4 >= 4)
        {
         break;
        }
       GLF_live3_looplimiter4 ++;
       switch(GLF_live3sum_index)
        {
         case 3:
         GLF_live3sums[clamp(GLF_live3sum_index, 0, 9 - 1)] += 1.0;
         case 4:
         GLF_live3sums[clamp(GLF_live3sum_index, 0, 9 - 1)] += 1.0;
        }
      }
     GLF_live3sum_index ++;
    }
  }
}
