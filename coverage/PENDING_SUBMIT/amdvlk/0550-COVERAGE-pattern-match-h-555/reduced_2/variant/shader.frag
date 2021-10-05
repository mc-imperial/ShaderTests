#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
precision highp float;

precision highp int;

void GLF_live4merge()
{
 for(int GLF_live4i = 1; true; 1)
  {
   int GLF_live9_looplimiter2 = 1;
   for(int _injected_loop_counter = 0; _injected_loop_counter != (int(injectionSwitch.x) >> 1); _injected_loop_counter ++)
    {
     for(int GLF_live9i = 1; true; 1)
      {
       if(GLF_live9_looplimiter2 >= 6)
        {
         break;
        }
       GLF_live9_looplimiter2 ++;
      }
    }
   break;
  }
}
precision highp int;

precision highp float;

void main()
{
 int GLF_live4_looplimiter3 = 1;
 for(int GLF_live4i = 1; true; 1)
  {
   if(GLF_live4_looplimiter3 >= 4)
    {
     break;
    }
   GLF_live4_looplimiter3 ++;
   GLF_live4merge();
  }
}
