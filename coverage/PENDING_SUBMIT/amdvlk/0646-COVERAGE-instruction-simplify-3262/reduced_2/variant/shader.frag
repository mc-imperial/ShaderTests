#version 320 es

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 int sum = 1;
 for(int target = 1; target < ((gl_FragCoord.x >= 1.0) ? 20 : (- 1)); target ++)
  {
   int search_inline_return_value_1 = 1;
   {
    int target = target;
    bool search_has_returned = true;
    search_has_returned = false;
    int search_return_value = 1;
    if(1 == target)
     {
      search_has_returned = true;
     }
    if(search_has_returned)
     {
      search_return_value = - 1;
     }
    search_inline_return_value_1 = search_return_value;
   }
   sum += search_inline_return_value_1;
  }
 vec3 hueColor_inline_return_value_0 = vec3(1.0);
 vec3 color = vec3(1.0);
 color = float(sum) * vec3(1.0);
 hueColor_inline_return_value_0 = color;
 _GLF_color = vec4(hueColor_inline_return_value_0, 1.0);
}
