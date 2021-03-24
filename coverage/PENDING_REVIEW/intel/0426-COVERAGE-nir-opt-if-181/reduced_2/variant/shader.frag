#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

vec3 drawShape()
{
 do
  {
   _GLF_global_loop_count ++;
   if(true)
    {
     if(true)
      {
       return vec3(1.0);
      }
     else
      {
      }
    }
   else
    {
    }
  }
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
 return vec3(1.0);
}
void main()
{
 drawShape();
}
