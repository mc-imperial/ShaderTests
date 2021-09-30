; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 88
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %24 "i"
               OpName %35 "j"
               OpName %53 "buf0"
               OpMemberName %53 0 "_GLF_uniform_float_values"
               OpName %55 ""
               OpName %59 "buf2"
               OpMemberName %59 0 "quarter"
               OpName %61 ""
               OpDecorate %9 Location 0
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpDecorate %52 ArrayStride 16
               OpMemberDecorate %53 0 Offset 0
               OpDecorate %53 Block
               OpDecorate %55 DescriptorSet 0
               OpDecorate %55 Binding 0
               OpMemberDecorate %59 0 Offset 0
               OpDecorate %59 Block
               OpDecorate %61 DescriptorSet 0
               OpDecorate %61 Binding 2
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpTypeInt 32 1
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 2
         %13 = OpTypeArray %10 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %10 0
         %18 = OpTypePointer Uniform %10
         %23 = OpTypePointer Function %10
         %25 = OpConstant %10 1
         %32 = OpConstant %10 9
         %33 = OpTypeBool
         %42 = OpConstant %10 10
         %51 = OpConstant %11 1
         %52 = OpTypeArray %6 %51
         %53 = OpTypeStruct %52
         %54 = OpTypePointer Uniform %53
         %55 = OpVariable %54 Uniform
         %56 = OpTypePointer Uniform %6
         %59 = OpTypeStruct %6
         %60 = OpTypePointer Uniform %59
         %61 = OpVariable %60 Uniform
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %24 = OpVariable %23 Function
         %35 = OpVariable %23 Function
         %19 = OpAccessChain %18 %16 %17 %17
         %20 = OpLoad %10 %19
         %21 = OpConvertSToF %6 %20
         %22 = OpCompositeConstruct %7 %21 %21 %21 %21
               OpStore %9 %22
               OpStore %24 %25
               OpBranch %26
         %26 = OpLabel
               OpLoopMerge %28 %29 None
               OpBranch %30
         %30 = OpLabel
         %31 = OpLoad %10 %24
         %34 = OpSLessThan %33 %31 %32
               OpBranchConditional %34 %27 %28
         %27 = OpLabel
               OpStore %35 %25
               OpBranch %36
         %36 = OpLabel
               OpLoopMerge %38 %39 None
               OpBranch %40
         %40 = OpLabel
         %41 = OpLoad %10 %35
         %43 = OpSLessThan %33 %41 %42
               OpBranchConditional %43 %37 %38
         %37 = OpLabel
         %44 = OpLoad %10 %24
         %45 = OpAccessChain %18 %16 %17 %25
         %46 = OpLoad %10 %45
         %47 = OpSGreaterThan %33 %44 %46
               OpSelectionMerge %49 None
               OpBranchConditional %47 %48 %49
         %48 = OpLabel
               OpBranch %39
         %49 = OpLabel
         %57 = OpAccessChain %56 %55 %17 %17
         %58 = OpLoad %6 %57
         %62 = OpAccessChain %56 %61 %17
         %63 = OpLoad %6 %62
         %64 = OpFDiv %6 %58 %63
         %65 = OpAccessChain %56 %55 %17 %17
         %66 = OpLoad %6 %65
         %67 = OpFOrdLessThan %33 %64 %66
               OpSelectionMerge %69 None
               OpBranchConditional %67 %68 %69
         %68 = OpLabel
               OpReturn
         %69 = OpLabel
               OpBranch %39
         %39 = OpLabel
         %71 = OpLoad %10 %35
         %72 = OpIAdd %10 %71 %25
               OpStore %35 %72
               OpBranch %36
         %38 = OpLabel
               OpBranch %29
         %29 = OpLabel
         %73 = OpLoad %10 %24
         %74 = OpIAdd %10 %73 %25
               OpStore %24 %74
               OpBranch %26
         %28 = OpLabel
         %75 = OpAccessChain %18 %16 %17 %25
         %76 = OpLoad %10 %75
         %77 = OpConvertSToF %6 %76
         %78 = OpAccessChain %18 %16 %17 %17
         %79 = OpLoad %10 %78
         %80 = OpConvertSToF %6 %79
         %81 = OpAccessChain %18 %16 %17 %17
         %82 = OpLoad %10 %81
         %83 = OpConvertSToF %6 %82
         %84 = OpAccessChain %18 %16 %17 %25
         %85 = OpLoad %10 %84
         %86 = OpConvertSToF %6 %85
         %87 = OpCompositeConstruct %7 %77 %80 %83 %86
               OpStore %9 %87
               OpReturn
               OpFunctionEnd
