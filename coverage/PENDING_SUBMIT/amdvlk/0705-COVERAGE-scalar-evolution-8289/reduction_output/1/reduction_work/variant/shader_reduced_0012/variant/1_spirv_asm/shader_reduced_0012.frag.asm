; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 91
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %72
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %20 "buf_push"
               OpMemberName %20 0 "one"
               OpName %22 ""
               OpName %28 "buf1"
               OpMemberName %28 0 "_GLF_uniform_int_values"
               OpName %30 ""
               OpName %39 "a"
               OpName %43 "i"
               OpName %72 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpMemberDecorate %20 0 Offset 0
               OpDecorate %20 Block
               OpDecorate %27 ArrayStride 16
               OpMemberDecorate %28 0 Offset 0
               OpDecorate %28 Block
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 1
               OpDecorate %72 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 1
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpTypeInt 32 1
         %16 = OpConstant %15 0
         %17 = OpTypePointer Uniform %6
         %20 = OpTypeStruct %15
         %21 = OpTypePointer PushConstant %20
         %22 = OpVariable %21 PushConstant
         %23 = OpTypePointer PushConstant %15
         %26 = OpConstant %9 2
         %27 = OpTypeArray %15 %26
         %28 = OpTypeStruct %27
         %29 = OpTypePointer Uniform %28
         %30 = OpVariable %29 Uniform
         %31 = OpTypePointer Uniform %15
         %34 = OpTypeBool
         %38 = OpTypePointer Function %15
         %40 = OpConstant %15 1
         %50 = OpConstant %15 120
         %70 = OpTypeVector %6 4
         %71 = OpTypePointer Output %70
         %72 = OpVariable %71 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %39 = OpVariable %38 Function
         %43 = OpVariable %38 Function
         %18 = OpAccessChain %17 %14 %16 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %24 = OpAccessChain %23 %22 %16
         %25 = OpLoad %15 %24
         %32 = OpAccessChain %31 %30 %16 %16
         %33 = OpLoad %15 %32
         %35 = OpSGreaterThan %34 %25 %33
               OpSelectionMerge %37 None
               OpBranchConditional %35 %36 %37
         %36 = OpLabel
         %41 = OpAccessChain %31 %30 %16 %40
         %42 = OpLoad %15 %41
               OpStore %39 %42
               OpStore %43 %16
               OpBranch %44
         %44 = OpLabel
               OpLoopMerge %46 %47 None
               OpBranch %48
         %48 = OpLabel
         %49 = OpLoad %15 %43
         %51 = OpSLessThan %34 %49 %50
               OpBranchConditional %51 %45 %46
         %45 = OpLabel
         %52 = OpAccessChain %23 %22 %16
         %53 = OpLoad %15 %52
         %54 = OpLoad %15 %39
         %55 = OpIMul %15 %54 %53
               OpStore %39 %55
               OpBranch %47
         %47 = OpLabel
         %56 = OpLoad %15 %43
         %57 = OpIAdd %15 %56 %40
               OpStore %43 %57
               OpBranch %44
         %46 = OpLabel
         %58 = OpLoad %15 %39
         %59 = OpConvertSToF %6 %58
               OpStore %8 %59
               OpBranch %37
         %37 = OpLabel
         %60 = OpLoad %6 %8
         %61 = OpAccessChain %17 %14 %16 %16
         %62 = OpLoad %6 %61
         %63 = OpExtInst %6 %1 FMax %60 %62
               OpStore %8 %63
         %64 = OpLoad %6 %8
         %65 = OpAccessChain %17 %14 %16 %16
         %66 = OpLoad %6 %65
         %67 = OpFOrdEqual %34 %64 %66
               OpSelectionMerge %69 None
               OpBranchConditional %67 %68 %86
         %68 = OpLabel
         %73 = OpAccessChain %31 %30 %16 %40
         %74 = OpLoad %15 %73
         %75 = OpConvertSToF %6 %74
         %76 = OpAccessChain %31 %30 %16 %16
         %77 = OpLoad %15 %76
         %78 = OpConvertSToF %6 %77
         %79 = OpAccessChain %31 %30 %16 %16
         %80 = OpLoad %15 %79
         %81 = OpConvertSToF %6 %80
         %82 = OpAccessChain %31 %30 %16 %40
         %83 = OpLoad %15 %82
         %84 = OpConvertSToF %6 %83
         %85 = OpCompositeConstruct %70 %75 %78 %81 %84
               OpStore %72 %85
               OpBranch %69
         %86 = OpLabel
         %87 = OpAccessChain %31 %30 %16 %16
         %88 = OpLoad %15 %87
         %89 = OpConvertSToF %6 %88
         %90 = OpCompositeConstruct %70 %89 %89 %89 %89
               OpStore %72 %90
               OpBranch %69
         %69 = OpLabel
               OpReturn
               OpFunctionEnd