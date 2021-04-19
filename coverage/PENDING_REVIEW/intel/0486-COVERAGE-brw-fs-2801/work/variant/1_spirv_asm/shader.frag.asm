; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 73
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %61
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %22 "i"
               OpName %25 "buf1"
               OpMemberName %25 0 "_GLF_uniform_int_values"
               OpName %27 ""
               OpName %41 "a"
               OpName %61 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %24 ArrayStride 16
               OpMemberDecorate %25 0 Offset 0
               OpDecorate %25 Block
               OpDecorate %27 DescriptorSet 0
               OpDecorate %27 Binding 1
               OpDecorate %61 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 2
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpTypeInt 32 1
         %16 = OpConstant %15 0
         %17 = OpConstant %15 1
         %18 = OpTypePointer Uniform %6
         %21 = OpTypePointer Function %15
         %23 = OpConstant %9 3
         %24 = OpTypeArray %15 %23
         %25 = OpTypeStruct %24
         %26 = OpTypePointer Uniform %25
         %27 = OpVariable %26 Uniform
         %28 = OpTypePointer Uniform %15
         %39 = OpTypeBool
         %42 = OpConstant %6 1
         %48 = OpConstant %6 0
         %59 = OpTypeVector %6 4
         %60 = OpTypePointer Output %59
         %61 = OpVariable %60 Output
         %62 = OpConstant %15 2
         %72 = OpConstantComposite %59 %48 %48 %48 %48
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %22 = OpVariable %21 Function
         %41 = OpVariable %7 Function
         %19 = OpAccessChain %18 %14 %16 %17
         %20 = OpLoad %6 %19
               OpStore %8 %20
         %29 = OpAccessChain %28 %27 %16 %17
         %30 = OpLoad %15 %29
               OpStore %22 %30
               OpBranch %31
         %31 = OpLabel
               OpLoopMerge %33 %34 None
               OpBranch %35
         %35 = OpLabel
         %36 = OpLoad %15 %22
         %37 = OpAccessChain %28 %27 %16 %16
         %38 = OpLoad %15 %37
         %40 = OpSGreaterThan %39 %36 %38
               OpBranchConditional %40 %32 %33
         %32 = OpLabel
         %43 = OpLoad %15 %22
         %44 = OpConvertSToF %6 %43
         %45 = OpExtInst %6 %1 FMax %42 %44
         %46 = OpFSub %6 %42 %45
               OpStore %41 %46
         %47 = OpLoad %6 %41
         %49 = OpExtInst %6 %1 FMax %47 %48
         %50 = OpExtInst %6 %1 FMin %49 %48
               OpStore %8 %50
               OpBranch %34
         %34 = OpLabel
         %51 = OpLoad %15 %22
         %52 = OpISub %15 %51 %17
               OpStore %22 %52
               OpBranch %31
         %33 = OpLabel
         %53 = OpLoad %6 %8
         %54 = OpAccessChain %18 %14 %16 %16
         %55 = OpLoad %6 %54
         %56 = OpFOrdEqual %39 %53 %55
               OpSelectionMerge %58 None
               OpBranchConditional %56 %57 %71
         %57 = OpLabel
         %63 = OpAccessChain %28 %27 %16 %62
         %64 = OpLoad %15 %63
         %65 = OpConvertSToF %6 %64
         %66 = OpLoad %6 %8
         %67 = OpAccessChain %28 %27 %16 %16
         %68 = OpLoad %15 %67
         %69 = OpConvertSToF %6 %68
         %70 = OpCompositeConstruct %59 %65 %66 %69 %42
               OpStore %61 %70
               OpBranch %58
         %71 = OpLabel
               OpStore %61 %72
               OpBranch %58
         %58 = OpLabel
               OpReturn
               OpFunctionEnd
