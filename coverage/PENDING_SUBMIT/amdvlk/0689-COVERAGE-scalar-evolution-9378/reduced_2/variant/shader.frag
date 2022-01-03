#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
precision highp int;

precision highp float;

void main()
{
 float GLF_live17data[10] = float[10](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
 int GLF_live17_looplimiter2 = 1;
 GLF_live17_looplimiter2 = 0;
 for(int GLF_live17i = 1; GLF_live17i < 9; GLF_live17i ++)
  {
   if(GLF_live17_looplimiter2 >= 1)
    {
     break;
    }
   for(int _injected_loop_counter = 1; 1 > int(injectionSwitch.x); 1)
    {
     GLF_live17_looplimiter2 ++;
    }
   int GLF_live17_looplimiter1 = 1;
   do
    {
     for(int GLF_live17j = 0; GLF_live17j < 10; GLF_live17j ++)
      {
       if(GLF_live17_looplimiter1 >= 7)
        {
         break;
        }
       GLF_live17_looplimiter1 ++;
       if(GLF_live17j < GLF_live17i + 1)
        {
         continue;
        }
       GLF_live17data[clamp(GLF_live17j, 0, 10 - 1)] = (GLF_live17data[1]);
      }
    }
   while(gl_FragCoord.y < 1.0);
  }
}
