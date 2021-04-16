; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 88
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %60 %69
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %12 "func(vf2;"
               OpName %11 "pos"
               OpName %21 "buf1"
               OpMemberName %21 0 "_GLF_uniform_float_values"
               OpName %23 ""
               OpName %44 "buf2"
               OpMemberName %44 0 "zero"
               OpName %46 ""
               OpName %60 "gl_FragCoord"
               OpName %61 "param"
               OpName %69 "_GLF_color"
               OpName %71 "buf0"
               OpMemberName %71 0 "_GLF_uniform_int_values"
               OpName %73 ""
               OpDecorate %20 ArrayStride 16
               OpMemberDecorate %21 0 Offset 0
               OpDecorate %21 Block
               OpDecorate %23 DescriptorSet 0
               OpDecorate %23 Binding 1
               OpMemberDecorate %44 0 Offset 0
               OpDecorate %44 Block
               OpDecorate %46 DescriptorSet 0
               OpDecorate %46 Binding 2
               OpDecorate %60 BuiltIn FragCoord
               OpDecorate %69 Location 0
               OpDecorate %70 ArrayStride 16
               OpMemberDecorate %71 0 Offset 0
               OpDecorate %71 Block
               OpDecorate %73 DescriptorSet 0
               OpDecorate %73 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
          %8 = OpTypePointer Function %7
          %9 = OpTypeBool
         %10 = OpTypeFunction %9 %8
         %14 = OpTypeInt 32 0
         %15 = OpConstant %14 0
         %16 = OpTypePointer Function %6
         %19 = OpConstant %14 2
         %20 = OpTypeArray %6 %19
         %21 = OpTypeStruct %20
         %22 = OpTypePointer Uniform %21
         %23 = OpVariable %22 Uniform
         %24 = OpTypeInt 32 1
         %25 = OpConstant %24 0
         %26 = OpTypePointer Uniform %6
         %32 = OpConstantTrue %9
         %34 = OpConstant %14 1
         %42 = OpConstantFalse %9
         %44 = OpTypeStruct %6
         %45 = OpTypePointer Uniform %44
         %46 = OpVariable %45 Uniform
         %49 = OpConstant %24 1
         %58 = OpTypeVector %6 4
         %59 = OpTypePointer Input %58
         %60 = OpVariable %59 Input
         %68 = OpTypePointer Output %58
         %69 = OpVariable %68 Output
         %70 = OpTypeArray %24 %19
         %71 = OpTypeStruct %70
         %72 = OpTypePointer Uniform %71
         %73 = OpVariable %72 Uniform
         %74 = OpTypePointer Uniform %24
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %61 = OpVariable %8 Function
         %62 = OpLoad %58 %60
         %63 = OpVectorShuffle %7 %62 %62 0 1
               OpStore %61 %63
         %64 = OpFunctionCall %9 %12 %61
               OpSelectionMerge %66 None
               OpBranchConditional %64 %65 %66
         %65 = OpLabel
               OpKill
         %66 = OpLabel
         %75 = OpAccessChain %74 %73 %25 %25
         %76 = OpLoad %24 %75
         %77 = OpConvertSToF %6 %76
         %78 = OpAccessChain %74 %73 %25 %49
         %79 = OpLoad %24 %78
         %80 = OpConvertSToF %6 %79
         %81 = OpAccessChain %74 %73 %25 %49
         %82 = OpLoad %24 %81
         %83 = OpConvertSToF %6 %82
         %84 = OpAccessChain %74 %73 %25 %25
         %85 = OpLoad %24 %84
         %86 = OpConvertSToF %6 %85
         %87 = OpCompositeConstruct %58 %77 %80 %83 %86
               OpStore %69 %87
               OpReturn
               OpFunctionEnd
         %12 = OpFunction %9 None %10
         %11 = OpFunctionParameter %8
         %13 = OpLabel
         %17 = OpAccessChain %16 %11 %15
         %18 = OpLoad %6 %17
         %27 = OpAccessChain %26 %23 %25 %25
         %28 = OpLoad %6 %27
         %29 = OpFOrdLessThan %9 %18 %28
               OpSelectionMerge %31 None
               OpBranchConditional %29 %30 %31
         %30 = OpLabel
               OpReturnValue %32
         %31 = OpLabel
         %35 = OpAccessChain %16 %11 %34
         %36 = OpLoad %6 %35
         %37 = OpAccessChain %26 %23 %25 %25
         %38 = OpLoad %6 %37
         %39 = OpFOrdGreaterThan %9 %36 %38
               OpSelectionMerge %41 None
               OpBranchConditional %39 %40 %41
         %40 = OpLabel
               OpReturnValue %42
         %41 = OpLabel
         %47 = OpAccessChain %26 %46 %25
         %48 = OpLoad %6 %47
         %50 = OpAccessChain %26 %23 %25 %49
         %51 = OpLoad %6 %50
         %52 = OpFOrdGreaterThan %9 %48 %51
               OpSelectionMerge %54 None
               OpBranchConditional %52 %53 %54
         %53 = OpLabel
               OpReturnValue %32
         %54 = OpLabel
               OpReturnValue %32
               OpFunctionEnd
