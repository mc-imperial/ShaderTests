#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 vec2 injectionSwitch;
};
void main()
{
 for(int i = - 1; i <= int(injectionSwitch.y); i ++)
  {
   int k = 1;
   while(k >= 0)
    {
     k --;
    }
  }
}
