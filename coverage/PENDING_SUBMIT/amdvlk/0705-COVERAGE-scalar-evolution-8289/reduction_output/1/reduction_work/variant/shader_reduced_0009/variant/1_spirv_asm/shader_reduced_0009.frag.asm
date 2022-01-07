; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 87
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
               OpName %41 "i"
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
         %26 = OpConstant %9 3
         %27 = OpTypeArray %15 %26
         %28 = OpTypeStruct %27
         %29 = OpTypePointer Uniform %28
         %30 = OpVariable %29 Uniform
         %31 = OpTypePointer Uniform %15
         %34 = OpTypeBool
         %38 = OpTypePointer Function %15
         %40 = OpConstant %15 1
         %48 = OpConstant %15 2
         %70 = OpTypeVector %6 4
         %71 = OpTypePointer Output %70
         %72 = OpVariable %71 Output
         %73 = OpConstant %6 1
         %85 = OpConstant %6 0
         %86 = OpConstantComposite %70 %85 %85 %85 %85
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %39 = OpVariable %38 Function
         %41 = OpVariable %38 Function
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
               OpStore %39 %40
               OpStore %41 %16
               OpBranch %42
         %42 = OpLabel
               OpLoopMerge %44 %45 None
               OpBranch %46
         %46 = OpLabel
         %47 = OpLoad %15 %41
         %49 = OpAccessChain %31 %30 %16 %48
         %50 = OpLoad %15 %49
         %51 = OpSLessThan %34 %47 %50
               OpBranchConditional %51 %43 %44
         %43 = OpLabel
         %52 = OpAccessChain %23 %22 %16
         %53 = OpLoad %15 %52
         %54 = OpLoad %15 %39
         %55 = OpIMul %15 %54 %53
               OpStore %39 %55
               OpBranch %45
         %45 = OpLabel
         %56 = OpLoad %15 %41
         %57 = OpIAdd %15 %56 %40
               OpStore %41 %57
               OpBranch %42
         %44 = OpLabel
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
               OpBranchConditional %67 %68 %84
         %68 = OpLabel
         %74 = OpAccessChain %31 %30 %16 %16
         %75 = OpLoad %15 %74
         %76 = OpConvertSToF %6 %75
         %77 = OpAccessChain %31 %30 %16 %16
         %78 = OpLoad %15 %77
         %79 = OpConvertSToF %6 %78
         %80 = OpAccessChain %31 %30 %16 %40
         %81 = OpLoad %15 %80
         %82 = OpConvertSToF %6 %81
         %83 = OpCompositeConstruct %70 %73 %76 %79 %82
               OpStore %72 %83
               OpBranch %69
         %84 = OpLabel
               OpStore %72 %86
               OpBranch %69
         %69 = OpLabel
               OpReturn
               OpFunctionEnd
