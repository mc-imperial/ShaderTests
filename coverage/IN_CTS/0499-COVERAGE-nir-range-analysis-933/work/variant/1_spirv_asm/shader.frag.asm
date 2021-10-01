; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 66
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %11 %42
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %11 "gl_FragCoord"
               OpName %19 "buf1"
               OpMemberName %19 0 "_GLF_uniform_float_values"
               OpName %21 ""
               OpName %42 "_GLF_color"
               OpName %44 "buf0"
               OpMemberName %44 0 "_GLF_uniform_int_values"
               OpName %46 ""
               OpDecorate %11 BuiltIn FragCoord
               OpDecorate %18 ArrayStride 16
               OpMemberDecorate %19 0 Offset 0
               OpDecorate %19 Block
               OpDecorate %21 DescriptorSet 0
               OpDecorate %21 Binding 1
               OpDecorate %42 Location 0
               OpDecorate %43 ArrayStride 16
               OpMemberDecorate %44 0 Offset 0
               OpDecorate %44 Block
               OpDecorate %46 DescriptorSet 0
               OpDecorate %46 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeVector %6 4
         %10 = OpTypePointer Input %9
         %11 = OpVariable %10 Input
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 1
         %14 = OpTypePointer Input %6
         %17 = OpConstant %12 2
         %18 = OpTypeArray %6 %17
         %19 = OpTypeStruct %18
         %20 = OpTypePointer Uniform %19
         %21 = OpVariable %20 Uniform
         %22 = OpTypeInt 32 1
         %23 = OpConstant %22 0
         %24 = OpConstant %22 1
         %25 = OpTypePointer Uniform %6
         %28 = OpTypeBool
         %30 = OpConstant %6 0.100000001
         %31 = OpConstant %6 1
         %41 = OpTypePointer Output %9
         %42 = OpVariable %41 Output
         %43 = OpTypeArray %22 %17
         %44 = OpTypeStruct %43
         %45 = OpTypePointer Uniform %44
         %46 = OpVariable %45 Uniform
         %47 = OpTypePointer Uniform %22
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %15 = OpAccessChain %14 %11 %13
         %16 = OpLoad %6 %15
         %26 = OpAccessChain %25 %21 %23 %24
         %27 = OpLoad %6 %26
         %29 = OpFOrdLessThan %28 %16 %27
         %32 = OpSelect %6 %29 %30 %31
         %33 = OpExtInst %6 %1 Trunc %32
         %34 = OpExtInst %6 %1 Fract %33
               OpStore %8 %34
         %35 = OpLoad %6 %8
         %36 = OpAccessChain %25 %21 %23 %23
         %37 = OpLoad %6 %36
         %38 = OpFOrdEqual %28 %35 %37
               OpSelectionMerge %40 None
               OpBranchConditional %38 %39 %61
         %39 = OpLabel
         %48 = OpAccessChain %47 %46 %23 %23
         %49 = OpLoad %22 %48
         %50 = OpConvertSToF %6 %49
         %51 = OpAccessChain %47 %46 %23 %24
         %52 = OpLoad %22 %51
         %53 = OpConvertSToF %6 %52
         %54 = OpAccessChain %47 %46 %23 %24
         %55 = OpLoad %22 %54
         %56 = OpConvertSToF %6 %55
         %57 = OpAccessChain %47 %46 %23 %23
         %58 = OpLoad %22 %57
         %59 = OpConvertSToF %6 %58
         %60 = OpCompositeConstruct %9 %50 %53 %56 %59
               OpStore %42 %60
               OpBranch %40
         %61 = OpLabel
         %62 = OpAccessChain %47 %46 %23 %24
         %63 = OpLoad %22 %62
         %64 = OpConvertSToF %6 %63
         %65 = OpCompositeConstruct %9 %64 %64 %64 %64
               OpStore %42 %65
               OpBranch %40
         %40 = OpLabel
               OpReturn
               OpFunctionEnd
