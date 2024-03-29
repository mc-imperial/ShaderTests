; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 58
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9 %32
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpName %12 "v"
               OpName %17 "buf0"
               OpMemberName %17 0 "_GLF_uniform_int_values"
               OpName %19 ""
               OpName %32 "gl_FragCoord"
               OpName %38 "buf1"
               OpMemberName %38 0 "_GLF_uniform_float_values"
               OpName %40 ""
               OpDecorate %9 Location 0
               OpDecorate %16 ArrayStride 16
               OpMemberDecorate %17 0 Offset 0
               OpDecorate %17 Block
               OpDecorate %19 DescriptorSet 0
               OpDecorate %19 Binding 0
               OpDecorate %32 BuiltIn FragCoord
               OpDecorate %37 ArrayStride 16
               OpMemberDecorate %38 0 Offset 0
               OpDecorate %38 Block
               OpDecorate %40 DescriptorSet 0
               OpDecorate %40 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpConstant %6 1
         %11 = OpTypePointer Function %7
         %13 = OpTypeInt 32 1
         %14 = OpTypeInt 32 0
         %15 = OpConstant %14 1
         %16 = OpTypeArray %13 %15
         %17 = OpTypeStruct %16
         %18 = OpTypePointer Uniform %17
         %19 = OpVariable %18 Uniform
         %20 = OpConstant %13 0
         %21 = OpTypePointer Uniform %13
         %24 = OpTypePointer Function %6
         %28 = OpConstantComposite %7 %10 %10 %10 %10
         %29 = OpTypeBool
         %30 = OpConstantTrue %29
         %31 = OpTypePointer Input %7
         %32 = OpVariable %31 Input
         %33 = OpTypePointer Input %6
         %36 = OpConstant %14 2
         %37 = OpTypeArray %6 %36
         %38 = OpTypeStruct %37
         %39 = OpTypePointer Uniform %38
         %40 = OpVariable %39 Uniform
         %41 = OpTypePointer Uniform %6
         %45 = OpTypeVector %29 4
         %48 = OpConstant %13 1
         %51 = OpTypeVector %6 2
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %12 = OpVariable %11 Function
         %22 = OpAccessChain %21 %19 %20 %20
         %23 = OpLoad %13 %22
         %25 = OpAccessChain %24 %12 %23
         %26 = OpLoad %6 %25
         %27 = OpCompositeConstruct %7 %10 %26 %10 %10
         %34 = OpAccessChain %33 %32 %15
         %35 = OpLoad %6 %34
         %42 = OpAccessChain %41 %40 %20 %20
         %43 = OpLoad %6 %42
         %44 = OpFOrdGreaterThan %29 %35 %43
         %46 = OpCompositeConstruct %45 %30 %30 %44 %30
         %47 = OpSelect %7 %46 %28 %27
               OpStore %9 %47
         %49 = OpAccessChain %41 %40 %20 %48
         %50 = OpLoad %6 %49
         %52 = OpLoad %7 %9
         %53 = OpVectorShuffle %51 %52 %52 1 2
         %54 = OpCompositeConstruct %51 %50 %50
         %55 = OpFSub %51 %53 %54
         %56 = OpLoad %7 %9
         %57 = OpVectorShuffle %7 %56 %55 0 4 5 3
               OpStore %9 %57
               OpReturn
               OpFunctionEnd
