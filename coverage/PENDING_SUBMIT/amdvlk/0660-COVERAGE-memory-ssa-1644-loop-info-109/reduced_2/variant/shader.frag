#version 320 es

precision highp int;

precision highp float;

// Contents of GLF_live4injectionSwitch: [0.5042646, 0.96283615]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 GLF_live4injectionSwitch;
};
precision highp float;

precision highp int;

void main()
{
 int GLF_live4count = 1;
 GLF_live4count = int(GLF_live4injectionSwitch.x);
 int GLF_live4_looplimiter4 = 1;
 do
  {
   if(GLF_live4_looplimiter4 >= 3)
    {
     break;
    }
   int GLF_live13_looplimiter4 = 1;
   float GLF_live13A[50] = float[50](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
   for(int GLF_live13i = 0; true; GLF_live13i ++)
    {
     if(GLF_live13_looplimiter4 >= 4)
      {
       break;
      }
     GLF_live13_looplimiter4 ++;
     GLF_live13A[clamp(GLF_live13i, 0, 50 - 1)] += GLF_live13A[GLF_live13i - 1];
    }
   GLF_live4_looplimiter4 ++;
   GLF_live4count ++;
  }
 while(GLF_live4count != 1);
}
