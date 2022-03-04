; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 68
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %12 %42
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "v0"
               OpName %12 "gl_FragCoord"
               OpName %20 "buf1"
               OpMemberName %20 0 "_GLF_uniform_float_values"
               OpName %22 ""
               OpName %42 "_GLF_color"
               OpName %45 "buf0"
               OpMemberName %45 0 "_GLF_uniform_int_values"
               OpName %47 ""
               OpDecorate %12 BuiltIn FragCoord
               OpDecorate %19 ArrayStride 16
               OpMemberDecorate %20 0 Offset 0
               OpDecorate %20 Block
               OpDecorate %22 DescriptorSet 0
               OpDecorate %22 Binding 1
               OpDecorate %42 Location 0
               OpDecorate %44 ArrayStride 16
               OpMemberDecorate %45 0 Offset 0
               OpDecorate %45 Block
               OpDecorate %47 DescriptorSet 0
               OpDecorate %47 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
          %8 = OpTypePointer Function %7
         %10 = OpTypeVector %6 4
         %11 = OpTypePointer Input %10
         %12 = OpVariable %11 Input
         %17 = OpTypeInt 32 0
         %18 = OpConstant %17 1
         %19 = OpTypeArray %6 %18
         %20 = OpTypeStruct %19
         %21 = OpTypePointer Uniform %20
         %22 = OpVariable %21 Uniform
         %23 = OpTypeInt 32 1
         %24 = OpConstant %23 0
         %25 = OpTypePointer Uniform %6
         %35 = OpTypeBool
         %36 = OpTypeVector %35 2
         %41 = OpTypePointer Output %10
         %42 = OpVariable %41 Output
         %43 = OpConstant %17 2
         %44 = OpTypeArray %23 %43
         %45 = OpTypeStruct %44
         %46 = OpTypePointer Uniform %45
         %47 = OpVariable %46 Uniform
         %48 = OpTypePointer Uniform %23
         %52 = OpConstant %23 1
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %13 = OpLoad %10 %12
         %14 = OpVectorShuffle %7 %13 %13 0 1
         %15 = OpLoad %10 %12
         %16 = OpVectorShuffle %7 %15 %15 0 1
         %26 = OpAccessChain %25 %22 %24 %24
         %27 = OpLoad %6 %26
         %28 = OpCompositeConstruct %7 %27 %27
         %29 = OpExtInst %7 %1 FMin %16 %28
         %30 = OpExtInst %7 %1 FMin %14 %29
               OpStore %9 %30
         %31 = OpLoad %7 %9
         %32 = OpAccessChain %25 %22 %24 %24
         %33 = OpLoad %6 %32
         %34 = OpCompositeConstruct %7 %33 %33
         %37 = OpFOrdEqual %36 %31 %34
         %38 = OpAll %35 %37
               OpSelectionMerge %40 None
               OpBranchConditional %38 %39 %63
         %39 = OpLabel
         %49 = OpAccessChain %48 %47 %24 %24
         %50 = OpLoad %23 %49
         %51 = OpConvertSToF %6 %50
         %53 = OpAccessChain %48 %47 %24 %52
         %54 = OpLoad %23 %53
         %55 = OpConvertSToF %6 %54
         %56 = OpAccessChain %48 %47 %24 %52
         %57 = OpLoad %23 %56
         %58 = OpConvertSToF %6 %57
         %59 = OpAccessChain %48 %47 %24 %24
         %60 = OpLoad %23 %59
         %61 = OpConvertSToF %6 %60
         %62 = OpCompositeConstruct %10 %51 %55 %58 %61
               OpStore %42 %62
               OpBranch %40
         %63 = OpLabel
         %64 = OpAccessChain %48 %47 %24 %52
         %65 = OpLoad %23 %64
         %66 = OpConvertSToF %6 %65
         %67 = OpCompositeConstruct %10 %66 %66 %66 %66
               OpStore %42 %67
               OpBranch %40
         %40 = OpLabel
               OpReturn
               OpFunctionEnd
