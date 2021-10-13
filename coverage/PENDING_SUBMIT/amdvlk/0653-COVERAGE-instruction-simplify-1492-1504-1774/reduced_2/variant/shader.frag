#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
precision highp int;

precision highp float;

void main()
{
 if(injectionSwitch.x > injectionSwitch.y)
  {
   return;
  }
 int GLF_dead1i = 1;
 GLF_dead1i = int(0.39932442);
 do
  {
   for(int GLF_dead1j = 1; GLF_dead1j < findLSB(1024); GLF_dead1j ++)
    {
     if(uint(GLF_dead1j) < uint(GLF_dead1i))
      {
       continue;
      }
     if(injectionSwitch.x > injectionSwitch.y)
      {
      }
     else
      {
       if(gl_FragCoord.y < 1.0)
        {
         discard;
        }
      }
    }
   GLF_dead1i ++;
  }
 while(GLF_dead1i < 512);
}
